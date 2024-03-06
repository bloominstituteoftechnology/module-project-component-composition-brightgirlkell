import React from 'react';



export default function figure({imageURl, caption}){
    return {
      <figure>
      <><img src={imageURl} /><figcaption>Awesome pic take on {caption}</figcaption></>
      </figure>
  
    }
  };