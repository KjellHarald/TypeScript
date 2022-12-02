import logo from './logo.svg';
import './App.css';
import Render from './ts/index.tsx'

function App(){ 
  return (
    <div className="App">
      <header className="App-header">
        <p>Let's Learn TypeScript.tsx</p>
        {Render()}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
