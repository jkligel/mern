import FormComponent from "../components/FormComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const New = (props) => {

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const addStore = (store) => {  
        axios.post('http://localhost:8000/api/stores', store)
        .then(res => {
            console.log(res.data);
            navigate(`/store/${res.data._id}`)
        })
        .catch(err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        });
    }

    return (
        <FormComponent onSubmitProp={addStore} 
          formTitle={"Add a new store!"}
          buttonTitle={"Add a New Store"} 
          errors={errors}
          initialStore={{name: "", number: "", open: false}}
        />
    )

}

export default New;