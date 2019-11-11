import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Headtag from './layout/head';

ReactDOM.render(<Headtag />, document.head);
ReactDOM.render(<App />, document.getElementById('root'));
