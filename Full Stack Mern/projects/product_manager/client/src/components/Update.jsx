import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import ProductForm from './ProductForm';

const Update = (props) => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                console.log(product)
                setLoaded(true);
            })
    }, []);

    const updateProduct = (product) => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>

        {
            loaded && (
                    <ProductForm
                    pageTitle={"Update a Product"}
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}                    
                    />
            )
        }

        </div>

    )
}

export default Update;