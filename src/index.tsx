import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Mars } from './InteractiveMars/Mars';

ReactDOM.render(
    <React.StrictMode>
        <Mars />
    </React.StrictMode>,
    document.getElementById('root')
);