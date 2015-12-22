import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Board from './Board';
import { observe } from './Game';

let node = document.getElementById('root');
observe(knightPosition =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, node)
);
