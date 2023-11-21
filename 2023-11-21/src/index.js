import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Autocomplete from './components/autocomplete/Autocomplete';
import ToDo from './components/todo/ToDo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container my-3">
    <h1>Autocomplete</h1>
    <Autocomplete />
    <h1 className="mt-4">ToDo List</h1>
    <ToDo />
  </div>
);
