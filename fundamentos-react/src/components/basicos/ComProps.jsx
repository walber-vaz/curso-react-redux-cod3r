import React from 'react';
import PropTypes from 'prop-types';

function ComProps(props) {
  const { titulo, aluno, nota } = props;
  const status = nota >= 7 ? 'aprovado' : 'reprovado';
  return (
    <>
      {/* Fragment <> </> */}
      <h2>{titulo}</h2>
      <h3>
        <strong>{aluno}</strong>
      </h3>
      <p>
        tem nota <strong>{nota}</strong> e foi <strong>{status}</strong>
      </p>
    </>
  );
}

ComProps.propTypes = {
  titulo: PropTypes.string.isRequired,
  aluno: PropTypes.string.isRequired,
  nota: PropTypes.number.isRequired,
};

export default ComProps;
