import React from 'react';
import Figure from "./Figure.js";



export default function Card({title, text, url, date}) {
  console.log(url)
    return (
      <div className = 'card'>
         <h2>{title}</h2>
        <p>{text}</p>
        <Figure
              url={url}
              caption={date} />
             
      </div>
    )
      
  }
  