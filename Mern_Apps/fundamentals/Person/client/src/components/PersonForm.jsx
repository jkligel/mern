import React, {useState} from 'react';
import axios from 'axios';

const PersonForm = (props) => {
    const {people, setPeople} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/people", {
            firstName,
            lastName
        })
            .then(res => {
                console.log(res);
                console.log(res.data);

                setPeople([...people, res.data])
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br />
                <input type={"text"} onChange={ (e) => setFirstName(e.target.value) }></input>
            </p>
            <p>
                <label>Last Name</label><br />
                <input type="text" onChange={ e => setLastName(e.target.value) }></input>
            </p>

            <input type="submit"></input>
        </form>
    )
}

export default PersonForm;