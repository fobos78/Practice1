import React, { FC } from 'react';
import { CardVariant, ICardProp } from './types';



const Card: FC<ICardProp> = ({width, height, variant, children, onClick}) => {
  return (
   <div style={{
     width, 
     height, 
     border : variant === CardVariant.outlined ? '1px solid gray' : 'none',
     background: variant === CardVariant.primary ? 'lyhtgray' : ''
    }}
    onClick={onClick}>{children}</div>
  );
}

export default Card;
