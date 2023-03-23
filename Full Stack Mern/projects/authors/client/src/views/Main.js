import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const Main = (props) => {

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

    const createAuthor = (author) => {
        axios.post('http://localhost:8000/api/authors', author)
          .then(res => {
            console.log(res.data);
            navigate('/');
          })
          .catch(err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
          });
      }

    return (
        <AuthorForm formTitle="Add a new author:" 
        initialName="" 
        onSubmitProp={createAuthor}
        errors={errors}
        />
    )
}

export default Main;