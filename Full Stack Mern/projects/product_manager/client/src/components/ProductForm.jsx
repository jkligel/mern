import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ProductForm = (props) => {
    const {pageTitle, initialTitle, initialDescription, initialPrice, onSubmitProp} = props;

    const [title, setTitle] = useState(initialTitle) ;
    const [price, setPrice] = useState(initialPrice) ;
    const [description, setDescription] = useState(initialDescription);

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        onSubmitProp({title, price, description});

        navigate('/');
    }

    return (
        <div>
            <form onSubmit={ onSubmitHandler }>

                <h1 className='text-center mb-3'>{pageTitle}</h1>

                <div className='form-group row mb-3 p-2'>
                    <label className='col'>Title</label>
                    <input className="col-8" type="text" 
                    name="title"
                    value={title} onChange={ e => setTitle(e.target.value)}/>
                </div>

                <div className='form-group mb-3 row mb-3 p-2'>
                    <label className='col'>Price</label>
                    <input className="col-8" type="number" 
                    name="price"
                    value={price} onChange={ e => setPrice( e.target.value )}/>
                </div>

                <div className='form-group mb-3 row mb-3 p-2'>
                    <label className='col'>Description</label>
                    <input className="col-8" type="text" 
                    name="description"
                    value={description} onChange={ e => setDescription(e.target.value)} />
                </div>

                <div className='text-center'>
                    <input className='btn btn-dark' type="submit" value="Submit" />
                </div>

            </form>

        </div>
    )
}

export default ProductForm;