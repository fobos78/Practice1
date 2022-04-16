import React, { FC, useState } from 'react';
import { CardVariant, ICardProp } from './types';

const Card: FC<ICardProp> = ({width, height, variant, children, onClick}) => {
  const [state, setState] = useState(0);
  return (
   <div style={{
     width, 
     height, 
     border : variant === CardVariant.outlined ? '1px solid gray' : 'none',
     background: variant === CardVariant.primary ? 'lyhtgray' : ''
    }}
    onClick={() => onClick(state)}>{children}</div>
  );
}

export default Card;
