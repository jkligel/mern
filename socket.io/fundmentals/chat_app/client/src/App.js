import './App.css';
import {useState, useEffect} from 'react';
import io from 'socket.io-client';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import HomePage from './components/HomePage';

function App() {

  const [socket] = useState(() => io(':8000'))
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [username, setUsername] = useState('');

  useEffect(() => {

    console.log('Running');

    // Make sure to remove strict mode from index.js file
    socket.on('connect', () => {
      console.log('Here');
      setIsConnected(true);
    });

    return () => {
      socket.disconnect(true);
    }

  }, []);

  return (
    <div className="p-3 m-auto w-75 text-center">
      <h1 className='border border-dark bg-light p-1'>MERN Chat</h1>

      <Routes>

        <Route element={
          <Form 
          username={username} 
          setUsername={setUsername} 
          socket={socket}
          />
        } path={'/'} />

        <Route path={'/homepage'} element={
          <HomePage socket={socket} 
          username={username}
          setUsername={setUsername}
          />
          } />

      </Routes>

    </div>
  );
}

export default App;
