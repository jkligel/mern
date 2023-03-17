import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Update = (props) => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div>

        {
            loaded && (
                    <form onSubmit={ updateProduct }>

                        <h3 className='text-center mb-3'>Update a Product</h3>

                        <div className='form-group row mb-3 p-2'>
                            <label className='col'>Title</label>
                            <input className="col-8" type="text" name="title" value={product.title} 
                            onChange={ e => setProduct({...product, title: e.target.value})}/>
                        </div>

                        <div className='form-group mb-3 row mb-3 p-2'>
                            <label className='col'>Price</label>
                            <input className="col-8" type="number" name="price" value={product.price} 
                            onChange={ e => setProduct({...product, price: e.target.value})}/>
                        </div>

                        <div className='form-group mb-3 row mb-3 p-2'>
                            <label className='col'>Description</label>
                            <input className="col-8" type="text" name="description" value={product.description} 
                            onChange={ e => setProduct({...product, description: e.target.value})}/>
                        </div>

                        <div className='text-center'>
                            <input className='btn btn-dark' type="submit" value="Update" />
                        </div>

                    </form>
            )
        }

        </div>

    )
}

export default Update;