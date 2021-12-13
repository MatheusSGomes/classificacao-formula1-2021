import Pilotos from '../pilotos';
import listaPilotos from '../../listaPilotos.js';

function Tabela(props) {
  return(
    <div className="tabela">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Piloto</th>
            <th>Equipe</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          <Pilotos dados={listaPilotos} />
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;