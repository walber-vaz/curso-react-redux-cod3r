import React, { useCallback, useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = props => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  const calcFactorial = useCallback(num => {
    const n = Number(num);
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFactorial(n - 1) * n;
  }, []);

  useEffect(() => {
    setFactorial(calcFactorial(number));
  }, [calcFactorial, number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {factorial === -1 ? 'Não existir' : factorial}
          </span>
        </div>
        <input
          min={0}
          type="number"
          className="input"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
    </div>
  );
};

export default UseEffect;
