import React from 'react';
import { ICardProp } from './types';



function Card({width, height, children} : ICardProp) {
  return (
   <div style={{width, height, background : 'gray'}}>{children}</div>
  );
}

export default Card;
