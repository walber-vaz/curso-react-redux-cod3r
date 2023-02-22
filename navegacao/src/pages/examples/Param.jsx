import React from 'react';
import { useParams } from 'react-router-dom';

const Param = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Param</h1>
      <p>Parâmetro: {id}</p>
    </div>
  );
};

export default Param;
