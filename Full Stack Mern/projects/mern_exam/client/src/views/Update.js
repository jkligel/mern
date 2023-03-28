import FormComponent from "../components/FormComponent";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";


const Update = (props) => {

    const [errors, setErrors] = useState({});

    const {id} = useParams();
    const [store, setStore] = useState({});
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores/' + id)
          .then(res => {
            console.log(res.data);
            setStore(res.data);
            setLoaded(true);
        })
          .catch(err => console.log(err));
      }, [])
    
      const updateStore = (store) => {
        axios.put('http://localhost:8000/api/stores/' + id, store)
          .then(res => {
            console.log(res.data);
            navigate(`/store/${id}`);
        })
          .catch(err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
          });
      }

    return ( loaded && (
            <FormComponent onSubmitProp={updateStore}
            formTitle={"Edit this store!"}
            buttonTitle={"Edit Store"}
            errors={errors}
            initialStore={store}
            />
        )
    )
}

export default Update;