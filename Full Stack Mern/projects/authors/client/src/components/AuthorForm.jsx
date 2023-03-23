import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';

const AuthorForm = (props) => {

    const {formTitle, onSubmitProp, initialName, errors} = props;

    const [authorName, setAuthorName] = useState(initialName);

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        onSubmitProp({name: authorName});
    }

    return (

        <div>

            <div>
                <Link to='/'>Home</Link>
                <h4 className='mt-3'>{formTitle}</h4>
            </div>

            <form className='' onSubmit={onSubmitHandler}>
    
                <div className='mb-3 form-group'>
                    <label className='form-label'>Name:</label>
                    <input 
                    className='form-control'
                    id='name'
                    type="text" value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    >
                    </input>

                    {
                        errors.name ? <p className='text-danger'>{errors.name.message}</p> : null
                    }
                </div>

                <button onClick={() => {navigate('/')}} className="btn btn-danger me-2">Cancel</button>
                <button className="btn btn-success" type="submit">Submit</button>
            </form>

        </div>
    )
}

export default AuthorForm;