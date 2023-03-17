import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import DisplayAll from '../components/DisplayAll';

const Main = (props) => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeople(res.data))
            .catch(err => console.log(err));
    }, []);

    // const removeFromDom = personId => {
    //     axios.delete('http://localhost:8000/api/people' + personId)
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //             setPeople(people.filter(person => person._id != personId));
    //         })
    //         .catch(err => console.log(err));
    // }

    const createPerson = (personParam) => {
        axios.post('http://localhost:8000/api/people', personParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setPeople([...people, res.data]);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName="" />
            <hr />
            <DisplayAll people={people} setPeople={setPeople} />
        </div>
    )

}

export default Main;