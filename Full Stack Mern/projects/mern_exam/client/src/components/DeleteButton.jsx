import axios from 'axios';

const DeleteButton = (props) => {

    const {storeId, onClickProp} = props;

    const onClickHandler = () => {
        axios.delete('http://localhost:8000/api/stores/' + storeId)
            .then(res => onClickProp())
            .catch(err => console.log(err));
    }

    return (
        <button className='shadow btn-outline-dark' onClick={onClickHandler}>
            Delete
        </button>
    )
}

export default DeleteButton;