// import logo from './logo.svg';
import './App.css';
import './components/Body.js';
import Food from './components/Body.js';
import logo from "./components/download.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo"></img>
        <h1>OREO</h1>
        <input type={'search'} placeholder="enter your dish or restaurant..."></input>
        <button>login</button>
      </header>
      <Food></Food>
    </div>
  );
}

export default App;
