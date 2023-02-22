import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = props => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  const merge = (str1, str2) => {
    return [...str1].map((el, index) => `${el}${str2[index] || ''}`).join('');
  };

  useEffect(() => {
    count.current += 1;
    myInput2.current.focus();
  }, [value1]);

  useEffect(() => {
    count.current += 1;
    myInput1.current.focus();
  }, [value2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          value={value1}
          ref={myInput1}
          onChange={e => setValue1(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div></div>
        <input
          type="text"
          className="input"
          value={value2}
          ref={myInput2}
          onChange={e => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
