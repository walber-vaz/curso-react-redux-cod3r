import React from 'react';

export default function ComProps(props) {
  const { titulo, aluno, nota } = props;
  return (
    <div>
      <h2>{titulo}</h2>
      <h3>
        <strong>{aluno}</strong>
      </h3>
      <p>
        tem nota <strong>{nota}</strong>
      </p>
    </div>
  );
}
