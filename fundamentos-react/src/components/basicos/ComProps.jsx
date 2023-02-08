import React from 'react';

export default function ComProps(props) {
  const { titulo, aluno, nota } = props;
  const aprov = nota >= 7 ? 'aprovado' : 'reprovado';
  return (
    <>
      <h2>{titulo}</h2>
      <h3>
        <strong>{aluno}</strong>
      </h3>
      <p>
        tem nota <strong>{nota}</strong> e foi <strong>{aprov}</strong>
      </p>
    </>
  );
}
