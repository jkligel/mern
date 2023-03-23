import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = (id) => {
        setAuthors(authors.filter(author => author._id !== id));
    }

    return (
        <div>

            <Link to={'/new'}>Add an author</Link>

            <table className='table table-hover'>

                <thead className='table-dark'>
                    <tr>
                        <th>Authors</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        authors.map((author, index) => {
                            return (
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link className='btn btn-primary me-2' to={`/edit/${author._id}`}>Edit</Link>
                                        <DeleteButton
                                        authorId={author._id}
                                        successCallback={() => removeFromDom(author._id)}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default AuthorList;