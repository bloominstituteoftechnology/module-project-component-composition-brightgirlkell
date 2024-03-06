import React from 'react';
import figure from "./Figure.js";


function Card ({title, text, imageUrl, date}) {
    return {
      <div className = 'card'>
        <><h2>{title}</h2>
        <p>{text}</p>
        <figure
              imageURL={imageUrl}
              caption={date} >
              </figure>
      </div>
    }
  
  };
  