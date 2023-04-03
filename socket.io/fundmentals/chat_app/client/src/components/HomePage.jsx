import React, {useEffect, useState} from 'react';
import '../App.css'

const HomePage = (props) => {

    const {socket, username, setUsername} = props;
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    socket.on('new-user-joined', (data, inputs) => {
        console.log(data);
        setUsers(data);
        console.log(inputs);
        inputs && setMessages([...messages, inputs]);
    });

    socket.on('send-message-to-all-clients', data => {
        setMessages([...messages, data])
    })

    const sendMessage = (e) => {
        e.preventDefault();

        socket.emit('send-message', {message: input, username});

        // Clear message input after emitting message
        setInput('')
    }

    return (
        <div className='border border-dark m-auto'>
            <h1>Welcome {username}</h1>
            <hr />

            <div className='scroll-window px-2 py-3'>
                {
                    users.map(user => {
                        return <p className='text-end' key={user.id}>{user.username} joined the chat</p>
                    })
                }

                {
                    messages.map(message => {
                        return <div 
                            className={`mb-3 d-flex flex-column`}>

                                <div className={`text-start p-2 border border-dark rounded ${message.username === username ? "align-self-end bg-primary" : "align-self-start bg-light" } `}>
                                    {
                                        username === message.username ?
                                        <strong>You said: </strong>
                                        :
                                        <strong>{message.username} said:</strong>
                                    }
                                    
                                    <p className='ms-3'>{message.message}</p>
                                </div>
                        </div>
                    })
                }
                </div>
                
                <form className='container' onSubmit={sendMessage}>
                    <div className='row text-start p-2'>
                        <input type="text"
                        className='col-sm-9 me-2'
                        placeholder='Type message...'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        />
                        <button className='col-sm-2 bg-primary text-light'>Send</button>
                    </div>

                </form>

        </div>
    )
}

export default HomePage;