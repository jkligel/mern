import React, {useState} from 'react';

const PersonForm = (props) => {
    const {initialFirstName, initialLastName, onSubmitProp} = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        onSubmitProp({firstName, lastName});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br />
                <input type="text" name="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value) }></input>
            </p>
            <p>
                <label>Last Name</label><br />
                <input type="text" name="lastName" value={lastName} onChange={ e => setLastName(e.target.value) }></input>
            </p>

            <input type="submit"></input>
        </form>
    )
}

export default PersonForm;