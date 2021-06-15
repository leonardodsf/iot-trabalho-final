/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
  const [response, setResponse] = useState('');
  
  let socket;

  useEffect(() => {

    if (!socket) {
      socket = new io('ws://localhost:3333');
    }

    socket.on('message', data => {
      console.log(data);
      setResponse(data);
    });

  }, [response, setResponse]);

  return (
    <div className="App">
      <div>
        <h1>e us guri</h1>
        <span>
          {response}
        </span>
      </div>
    </div>
  );
}

export default App;
