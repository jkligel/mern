import React, {useEffect, useState} from 'react';

const HomePage = (props) => {

    const {socket, username, setUsername} = props;
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    socket.on('new-user-joined', data => {
        console.log(data);
        setUsers(data);
    });

    socket.on('send-message-to-all-clients', data => {
        setMessages([...messages, data])
    })

    const sendMessage = (e) => {
        e.preventDefault();

        socket.emit('send-message', {message: input, username});
    }

    return (
        <div>
            <h1>Welcome {username}</h1>
            {
                users.map(user => {
                    return <p key={user.id}>{user.username} joined the chat</p>
                })
            }

            <form onSubmit={sendMessage}>
                <label>Message:</label>
                <input type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                 />
                <button>Send Message</button>
            </form>

            {
                messages.map(message => {
                    return <p>{message.username} Says: {message.message}</p>
                })
            }

        </div>
    )
}

export default HomePage;