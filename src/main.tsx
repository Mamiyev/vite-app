import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import './app/ui/styles/global.css';

const container = ReactDOM.createRoot(document.getElementById('root')!);

container.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
