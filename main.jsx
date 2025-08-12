import { StrictMode } from 'react'    ///default 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h5>From main.jsx</h5>
    <App/>
  </StrictMode>,
)


  // or like CRA

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css'
// import App from './App.jsx'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h5>From index.js</h5>
//     <App />
//   </React.StrictMode>
// );
