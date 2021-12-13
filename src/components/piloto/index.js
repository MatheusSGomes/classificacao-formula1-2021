import React, { Fragment } from 'react';

function Piloto(props) {
  return props.dados.map(item => {
    return(
      <Fragment>
        <tr>
          <td>
            <img 
              src={item.image}
              alt="Nome Piloto"
              />
          </td>
          <td>{item.nome}</td>
          <td>{item.equipe}</td>
          <td>{item.pontos}</td>
        </tr>
      </Fragment>
    )
  })
}

export default Piloto;