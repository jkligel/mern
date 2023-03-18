import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const Detail = (props) => {

    const [product, setProduct] = useState("");
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='Detail card border'>
            <h3 className='card-header'>{product.title}</h3>
            <div className='card-body'>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <DeleteButton productId={product._id} successCallback={() => navigate('/')}/>
            </div>

        </div>
    )
}

export default Detail;