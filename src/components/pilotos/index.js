import React, { Fragment } from 'react';
import Piloto from '../piloto';

function Pilotos(props) {
  return(
    <Fragment>
      <Piloto dados={props.dados} />
    </Fragment>
  );
}

export default Pilotos;