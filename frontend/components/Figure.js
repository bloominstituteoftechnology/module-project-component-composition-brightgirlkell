import React from 'react';



export default function Figure({url, caption}){
  console.log(url)
    return (
      <figure>
      <><img src={url} /><figcaption>Awesome pic take on {caption}</figcaption></>
      </figure>
  
    )
  }