import './App.css';
import { Game } from './components';

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="BackgroundVideo">
        <source src="https://korol.fr/space.mp4" type="video/mp4"/>
      </video>
      <Game></Game>
    </div>
  );
}

export default App;
