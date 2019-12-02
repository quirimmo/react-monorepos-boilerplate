import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Example } from 'component-library';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <br />
        <Example content="dsadsa" text="sdadsa" />
      </header>
    </div>
  );
};

export default App;
