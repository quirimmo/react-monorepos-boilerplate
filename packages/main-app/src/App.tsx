import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Example } from '@alpha/test-component-library';

console.log('AB');

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
      </header>
      <div>
        <Example content="dsadsa" text="sdadsa" />
      </div>
    </div>
  );
};

export default App;
