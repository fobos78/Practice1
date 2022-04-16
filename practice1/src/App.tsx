import React from 'react';
import Card from './components/Card/Card';
import { CardVariant } from './components/Card/types';

function App() {
  return (
   <div>
     <Card 
     width={'200px'} 
     height={'200px'} 
     variant={CardVariant.outlined} 
     onClick={() => console.log('click')}
     >
       <button style={{color: 'red'}}>кнопка</button>
       <div>test</div>
     </Card>
   </div>
  );
}

export default App;
