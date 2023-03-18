import React, {useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {

    const [products, setProducts] = useState([]);

    const createProduct = (product) => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res => {
                console.log(res.data);
                setProducts([...products, res.data]);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <ProductForm 
            pageTitle={"Create a Product"}
            onSubmitProp={createProduct}
            initialTitle={""}
            initialPrice={""}
            initialDescription={""}
            />
            <hr />
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}

export default Main;
