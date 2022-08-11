import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import FormAddContrato from './formulario_add_contrato.tsx';
import TabelaContratos from "./tabela_contratos";
import './index.css';
import api from "../../../config/axios";

export interface ContratosImoveis {
  register: string;
  title: string;
  body: string;
  rent: Boolean,
  sell: Boolean,
  endereco_imovel: Object | any;
  owner_contrato: Object | any;
  client_contrato: Object | any;
  date_start: string | null;
  date_end: string | null;
};

const MeusContratos: React.FunctionComponent = () => {
  
  const [show, setShow] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);
  const [contrato, setContrato] = useState<ContratosImoveis|any|{}>({});
  const [contratos, setContratos] = useState<ContratosImoveis[]>([]);
  const presenterURL = '/contratos_imoveis';

  const handleClose = () => {
    setShow(!show);
  };
  const handleShow = () => {
    setShow(!show);
  };

  const getContratos = async () => {
    await api.get(presenterURL)
    .then(response => {
      if (response)
      setContratos(response.data);
    }).catch(e => {
    }).finally(() => {
      setLoading(false);
    })
  };

  const postContrato = async () => {
    setLoading(true);
    await api.post(presenterURL, contrato)
    .then(response => {
      if (response) {
        contratos.push(response.data.response);
      }
    }).catch(e => {
    }).finally(() => {
      setLoading(false);
    })
  };

  useEffect(() => {
    if (contrato.title)
      postContrato();
  }, [contrato]);

  useEffect(() => {
    getContratos();
  }, []);

    return (
      <div className="main_dashboard meus_contratos">
        <h2 style={{ color: 'rgb(110, 72, 0)'}}>Contratos do Usuário!</h2>
        <Button variant="warning" onClick={handleShow}
        className='mt-4'>Adicionar contrato</Button>
        
        { loading ?
        <div>
          <Spinner className='mt-4' animation="border" role="status" />
        </div>
        : null }

      { contratos.length ?

          <div className='tabela_contratos'>
            <TabelaContratos contratos={contratos} />
          </div>
      : null }
        
        { show ?
        <FormAddContrato setContrato={setContrato} handleClose={handleClose}/>
        : null }
      </div>
    );
  }
  
  export default MeusContratos;
  