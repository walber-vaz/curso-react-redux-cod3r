import React, { useCallback, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import UseCallBackBtns from './UseCallBackBtns';

const UseCallback = props => {
  const [count, setCount] = useState(0);

  const inc = useCallback(
    delta => {
      setCount(prev => prev + delta);
    },
    [setCount],
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallBackBtns onInc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
