import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Counter from './counter';
import registerServiceWorker from './registerServiceWorker';
import tick from './tick';
import Game from './Games';
// Window.React=React;
ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Hello name="Bro" />, document.getElementById('helloroot'));
ReactDOM.render(<Counter />,document.getElementById('counter'));
ReactDOM.render(<Game />,document.getElementById('game'));
  
registerServiceWorker();
tick();