import React from 'react';
import  { createRoot } from 'react-dom/client';
import './index.css';

import Appstore from './Context/Appstore';
import App from './App';


const root = createRoot(document.getElementById('root'))
root.render(
  <Appstore>
        <App/>
  </Appstore> 
)
