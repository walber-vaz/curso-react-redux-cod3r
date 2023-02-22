import React from 'react';

import './styles.css';

const PageTitle = props => (
  <div className={`PageTitle ${props.error ? 'error' : ''}`}>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
);

export default PageTitle;
