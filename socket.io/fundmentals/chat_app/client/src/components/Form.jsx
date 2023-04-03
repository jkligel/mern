import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const navigate = useNavigate();

    const {username, setUsername, socket} = props;

    // Submit handler
    const joinServer = (e) => {
        e.preventDefault();
        // Event to send back to server
        socket.emit('join-server', username);
        // Go to chat room after joining the server
        navigate('/homepage');
    }

    return (
        <div className='border border-dark p-4 text-start mt-5'>

            <form onSubmit={joinServer}>

                <h2 className='text-center mb-4'>Get started right now!</h2>

                <p>Create a username to join the chat server...</p>
                
                <div className='row mb-3 form-group'>
                    <label className='col-form-label col-sm-2 me-4'>Username:</label>
                    <input type='text' name="username" 
                    className='col-form-control col-sm-9'
                    value={username}
                    onChange={
                        e => {
                            setUsername(e.target.value)
                        }
                    }
                    />
                </div>

                <div className='text-end'>
                    <button className='shadow btn btn-success mb-3'>Join</button>
                </div>

            </form>

        </div>
    )
}

export default Form;