import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Texto desde el componente
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

const App = () => <>
  <h1 className="tituloPrincipal">Nuevo titulo</h1>  
<img src={logo} className="App-logo" alt="logo" />
</>





export default App;
