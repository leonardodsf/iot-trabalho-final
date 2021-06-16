import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const socket = io('ws://localhost:3333');

    socket.on('message', (data) => {
      console.log(data);
      setResponse([...response, data]);
    });

    return () => socket.disconnect();
  }, [response, setResponse]);

  return (
    <div className="App">
      <div>
        <h1>e us guri</h1>
        {response.map((value) => (
          <span>{value}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
