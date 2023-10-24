import Holbertonlogo from './Holberton Logo'
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={Holbertonlogo} className="App-logo" alt="Holberton logo" />
       <h1>School dashboard</h1>
      </header>

       <div className="horizontal-line"></div>

      <div className='App-body'>
        <p className='body'>Login to access the full dashboard</p>
      </div>

      <div className="hr-bottom"></div>


      <footer className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </>
  );
}

export default App;
