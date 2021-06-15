import io from "socket.io-client";
import './App.css';

const socket = io('ws://localhost:3333');
socket.on("log", (arg) => {
  console.log(arg); // world
});

function App() {
  const handleWs = async () => {
    const response = await fetch('http://localhost:3333/message', {
      method: 'POST',
    });

    const resData = await response.json();

    console.log(resData);
  }

  return (
    <div className="App">
      <div>
        <h1>e us guri</h1>
        <button onClick={handleWs} type="button">clicaaqui meu</button>
      </div>
    </div>
  );
}

export default App;
