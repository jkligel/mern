import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [title, setTitle] = useState("") ;
    const [price, setPrice] = useState(0) ;
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={ onSubmitHandler }>

                <h3 className='text-center mb-3'>Product Manager</h3>

                <div className='form-group row bg-secondary mb-3 p-2'>
                    <label className='text-white col'>Title</label>
                    <input className="col-8" type="text" onChange={ e => setTitle(e.target.value)}/>
                </div>

                <div className='form-group mb-3 row bg-secondary mb-3 p-2'>
                    <label className='text-white col'>Price</label>
                    <input className="col-8" type="text" onChange={ e => setPrice( e.target.value )}/>
                </div>

                <div className='form-group mb-3 row bg-secondary mb-3 p-2'>
                    <label className='text-white col'>Description</label>
                    <input className="col-8" type="text" onChange={ e => setDescription(e.target.value)} />
                </div>

                <div className='text-center'>
                    <input className='btn btn-dark' type="submit" value="Create" />
                </div>

            </form>

        </div>
    )
}

export default ProductForm;