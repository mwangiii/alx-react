import Holbertonlogo from './Holberton Logo';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App () {
  const handleLabelClick = (inputId) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };
  return (
    <>
      <header className='App-header'>
        <img src={Holbertonlogo} className='App-logo' alt='logo' />
        <h1>School dashboard</h1>
      </header>

      <div className='horizontal-line' />

      <div className='App-body'>
        <p className='body'>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email' onClick={() => handleLabelClick('email')}>
            Email:
            <input type='email' id='email' name='email' />
          </label>
          <label htmlFor='password' onClick={() => handleLabelClick('password')}>
            Password:
            <input type='password' id='password' placeholder='Enter password' />
          </label>
          <button type='button'>OK</button>
        </form>
      </div>

      <div className='hr-bottom' />
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} &ndash; {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default App;
