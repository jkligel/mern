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
        <div>
            <form onSubmit={ onSubmitHandler }>

                <h3 className='text-center mb-3'>Product Manager</h3>

                <div className='form-group row mb-3 p-2'>
                    <label className='col'>Title</label>
                    <input className="col-8" type="text" onChange={ e => setTitle(e.target.value)}/>
                </div>

                <div className='form-group mb-3 row mb-3 p-2'>
                    <label className='col'>Price</label>
                    <input className="col-8" type="text" onChange={ e => setPrice( e.target.value )}/>
                </div>

                <div className='form-group mb-3 row mb-3 p-2'>
                    <label className='col'>Description</label>
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