import React from 'react';
import Figure from "./Figure.js";
import styled from 'styled-components'

const Stylecard = styled.div`
    border: 1px solid black;
    border-radius:12px;
    padding:2rem

    h2{
      margin: 0 0 1rem 0;
    }
   p{
     margin: 0 0 1.5rem 0;
     &:: first-line{
      font-size:1.5em;
     }
   }
`;

export default function Card({title, text, url, date}) {
  console.log(url)
    return (
      <Stylecard className = 'card'>
         <h2>{title}</h2>
        <p>{text}</p>
        <Figure
              url={url}
              caption={date} />
             
      </Stylecard>
    )
      
  }
  