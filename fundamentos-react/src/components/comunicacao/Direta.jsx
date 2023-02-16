import React from 'react';
import DiretaChildren from './DiretaChildren';

function Direta() {
  return (
    <div>
      <DiretaChildren texto="Filho via Props" numero={23} bool={false} />
    </div>
  );
}

export default Direta;
