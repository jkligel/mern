import {useState} from 'react';
import {Link} from 'react-router-dom'

const FormComponent = (props) => {

    const {initialStore, onSubmitProp, errors, formTitle, buttonTitle} = props;

    const [storeName, setStoreName] = useState(initialStore.name);
    const [storeNumber, setStoreNumber] = useState(initialStore.number);
    const [storeOpen, setStoreOpen] = useState(initialStore.open);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        onSubmitProp({name: storeName, number: storeNumber, open: storeOpen});
    }

    return (
        <div className='position-relative'>

            <Link className='position-absolute bottom-100 end-0 translate-middle' to="/">go back home</Link>

            <p className='ms-2'>{formTitle}</p>

            <form className='border border-dark p-3' onSubmit={onSubmitHandler}>

                <div className="form-group mb-3">
                    <label className='form-label' htmlFor="name">Store Name</label>
                    {
                        errors.name && (
                            <span className='text-danger ms-3'>{errors.name.message}</span>
                        )
                    }
                    <input className='form-control' id="name" type="text" value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    />
                </div>

                <div className='form-group mb-3'>
                    <label className='form-label' htmlFor='number'>Store Number</label>
                    {
                        errors.number && (
                            <span className='text-danger ms-3'>{errors.number.message}</span>
                        )
                    }
                    <input className='form-control' id="number" type="number" value={storeNumber}
                    onChange={e => setStoreNumber(e.target.value)}
                    />
                </div>

                <div className='form-check ms-2 mb-3'>
                    <input className='form-check-input' type="checkbox"
                    onChange={e => setStoreOpen(e.target.checked)}
                    defaultChecked={storeOpen ? "checked" : null}
                    />
                    <label className='form-check-label'>Open?</label>
                </div>

                <div>
                    <button className='shadow btn-outline-dark' type="submit">{buttonTitle}</button>
                </div>

            </form>

        </div>
    )
}

export default FormComponent;