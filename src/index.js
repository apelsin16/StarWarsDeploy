
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename='https://apelsin16.github.io/StarWarsDeploy/build/' >
        <App />
    </BrowserRouter>,
    document.getElementById('root'));