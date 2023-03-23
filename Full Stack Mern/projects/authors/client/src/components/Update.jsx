import AuthorForm from './AuthorForm';
import { useParams, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Update = (props) => {

    const {id} = useParams();

    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                console.log(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    const updateAuthor = (author) => {
        axios.put('http://localhost:8000/api/authors/' + id, author )
            .then(res => {
                console.log('Updated data: ', author);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    }

    return (
        <div>
            {
                loaded && (
                    <AuthorForm formTitle={"Edit an author:"} 
                    initialName={author.name}
                    onSubmitProp={updateAuthor}
                    errors={errors}
                    />
                )
            }
        </div>
      
    )
}

export default Update;