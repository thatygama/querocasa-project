import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

export interface ContratosImoveis {
    register: string;
    title: string;
    body: string;
    rent: Boolean,
    sell: Boolean,
    endereco_imovel: Object,
    owner_contrato: any;
    client_contrato: any;
    date_start: string | null;
    date_end: string | null;
  };

export interface ITabelaContratosProps {
    contratos: ContratosImoveis[]
}
  
const TabelaContratos: React.FunctionComponent<ITabelaContratosProps> = (props) => {

    useEffect(() => {
    }, [props.contratos]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Registro</th>
          <th>Título</th>
          <th>Proprietário</th>
          <th>Cliente</th>
        </tr>
      </thead>


      <tbody>
      {props.contratos.map((contrato, id) => {
          return (
            <tr key={id}>
              <td>{contrato.register}</td>
              <td>{contrato.title}</td>
              <td>{contrato.owner_contrato.name}</td>
              <td>{contrato.client_contrato.name}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TabelaContratos;