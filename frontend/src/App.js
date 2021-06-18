import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import MessageCard from './components/MessageCard';

function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const socket = io('ws://localhost:3333');

    socket.on('message', (data) => {
      setResponse([...response, data]);
    });

    return () => socket.disconnect();
  }, [response, setResponse]);

  return (
    <div className="App">
      {
        response.length === 0 ? (
          <MessageCard message="Nenhuma mensagem encontrada" isProtect />
        ) : (
          response.map((message) => (
            <MessageCard message={message} />
          ))
        )
      }
    </div>
  );
}

export default App;
