import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home/Home';
import Layouts from './Components/Home/Layouts/Layouts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Layouts>
        <Home />
    </Layouts>
);

