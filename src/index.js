
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename='/build/' >
        <App />
    </BrowserRouter>,
    document.getElementById('root'));