import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

const StoreList = (props) => {

    const [stores, setStores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
            .then(res => {
                console.log(res.data);
                setStores(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = (storeId) => {
        setStores(stores.filter(store => store._id !== storeId));
    }

    return (
        <div className='me-2'>

            <p className='ms-2'>Find stores in your area!</p>

           <table className='table table-striped'>

                <thead>
                    <tr>
                        <th className='border border-dark border-bottom-0'>Store</th>
                        <th className='border border-dark border-bottom-0'>Store Number</th>
                        <th className='text-center border border-dark border-bottom-0'>Open</th>
                        <th className='text-center border border-dark border-bottom-0'>Remove</th>
                    </tr>
                </thead>

                <tbody className='border border-dark border-top-0'>

                    {
                        stores.map((store, index) => {
                            return (
                                <tr key={index}>
                                    <td className='border border-dark border-top-0 border-bottom-0'>
                                        <Link to={`/store/${store._id}`}>
                                            {store.name}
                                        </ Link>
                                    </td>
                                    <td className='border border-dark border-top-0 border-bottom-0'>{store.number}</td>
                                    <td className='text-center border border-dark border-top-0 border-bottom-0'>{store.open ? "True" : "False"}</td>
                                    <td className='text-center border border-dark border-top-0 border-bottom-0'>
                                        <DeleteButton storeId={store._id} 
                                        onClickProp={() => removeFromDom(store._id)} />
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>

           </table>

           <button className='shadow btn-outline-dark'>
            <Link className='text-decoration-none text-dark' to="/store/add">Can't find your store?</Link>
           </button>

        </div>
    )
}

export default StoreList;