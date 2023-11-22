import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseEffect from './components/useeffect/UseEffect';
import Admin from './components/admin/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container py-5 px-5">
      <h1>Administratorius</h1>
      <Admin />
      <h1>UseEffect Pavyzdys</h1>
      <UseEffect />
    </div>
  </React.StrictMode>
);
