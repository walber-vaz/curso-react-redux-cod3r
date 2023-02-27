import React, { useCallback, useContext } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

import { DataContext } from '../../data/dataContext';

const UseContext = props => {
  const { state, setState } = useContext(DataContext);

  const addNumber = useCallback((delta) => {
    setState((prevState) => ({
      ...prevState,
      number: prevState.number + delta,
    }));
  }, [setState]);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{state.text}</span>
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber(1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
