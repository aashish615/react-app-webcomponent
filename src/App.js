import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <popup-comp onClick={(e)=>console.log(e)} message="hello ashish web component from react app"></popup-comp>
      </header>
    </div>
  );
}

export default App;
