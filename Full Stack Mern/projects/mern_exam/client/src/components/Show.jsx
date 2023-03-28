import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const Show = (props) => {

    const {id} = useParams();

    const [store, setStore] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores/' + id)
            .then(res => {
                console.log(res.data);
                setStore(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (

        <div className="position-relative">
            <Link className="position-absolute bottom-100 end-0 translate-middle" to="/">go back home</Link>

            <div className="pt-3 ps-2">
                <p>{store.name}</p>
                <p>Store Number: {store.number}</p>
                <p>{store.open ? "Open": "Closed"}</p>

                <button className="mt-5 shadow btn-outline-dark">
                    <Link className="text-decoration-none text-dark" to={`/store/edit/${store._id}`}>Edit Store Details</Link>
                </button>

            </div>

        </div>

    )
}

export default Show;