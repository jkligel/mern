import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {

    const {products, setProducts} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    })

    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div className='ProductList'>
            <h1>All Products:</h1>
            {
                products.map((product, index) => {
                    return (
                        <div className="card border mb-2" key={index}>
                            <Link className='card-header h5 link-dark' to={`/products/${product._id}`}>{product.title}</Link>
                            <div className='m-2'>
                                <Link className='me-3' to={`/edit/${product._id}`}>Edit</Link>
                                <DeleteButton productId={product._id} successCallback={ () => removeFromDom(product._id) } />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;