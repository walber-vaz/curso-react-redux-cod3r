import React from 'react';
import PropTypes from 'prop-types';
import If from './If';

const UserInfo = ({ usuario }) => (
  <div>
    <h2>Seja bem vindo</h2>
    <If test={usuario && usuario.nome}>
      <span>Usuário: {usuario.nome}</span>
    </If>
    <If test={!usuario || !usuario.nome}>
      <span>Usuário: Desconhecido</span>
    </If>
  </div>
);

UserInfo.propTypes = {
  usuario: PropTypes.shape({}),
}.isRequired;

export default UserInfo;
