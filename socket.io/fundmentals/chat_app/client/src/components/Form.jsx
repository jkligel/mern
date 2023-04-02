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
        <div className='border border-dark p-4 text-start'>

            <form onSubmit={joinServer}>

                <h2>Create a username to join our server</h2>
                
                <div className='row input-group mb-3'>
                    <label className=''>Username:</label>
                    <input type='text' name="username" 
                    className=''
                    value={username}
                    onChange={
                        e => {
                            setUsername(e.target.value)
                        }
                    }
                    />
                </div>

                <button className='shadow btn btn-outline-dark'>Join</button>

            </form>

        </div>
    )
}

export default Form;