import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PersonForm = (props) => {
    const [ message, setMessage] = useState('loading...');

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => setMessage(res.data.message))
            .catch(err => console.log(err));
    }, []); // Run the useEffect on the first load only

    return (
        <div>
            <h2>Message from the backend: {message}</h2>
        </div>
    )
}

export default PersonForm;