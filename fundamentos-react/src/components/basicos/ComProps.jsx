import React from 'react';
import PropTypes from 'prop-types';

function ComProps(props) {
  const { titulo, aluno, nota } = props;
  const status = nota >= 7 ? 'aprovado' : 'reprovado';
  return (
    <div>
      {/* Fragment <> </> */}
      <h2>{titulo}</h2>
      <h3>{aluno}</h3>
      <p>{`tem nota ${nota} e foi ${status}`}</p>
    </div>
  );
}

ComProps.propTypes = {
  titulo: PropTypes.string.isRequired,
  aluno: PropTypes.string.isRequired,
  nota: PropTypes.number.isRequired,
};

export default ComProps;
