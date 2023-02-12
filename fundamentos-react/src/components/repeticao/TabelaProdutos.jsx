import React from 'react';
import produtos from '../../data/produtos';

import './TabelaProdutos.css';

const TabelaProdutos = () => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="total">
      <strong>
        Total: R$&nbsp;
        {produtos
          .map((produto) => produto.preco)
          .reduce((a, b) => parseFloat(a) + parseFloat(b))
          .toFixed(2)
          .replace('.', ',')}
      </strong>
    </p>
  </div>
);

export default TabelaProdutos;
