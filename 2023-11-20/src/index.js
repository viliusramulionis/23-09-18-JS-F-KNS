import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Video from './Video';
import Input from './Input';
import image from './image.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="container">
      <Video videoID="JjYUZ6Ct1ws" autoplay={false} controls={0}/>
      <Video videoID="yci475Vwc10" color="red" />
      <Video videoID="yci475Vwc10" thumbnail={image} />
    </div>
    <Input />
  </>
);
