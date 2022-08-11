import { ChangeEvent, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css';

export interface IFormAddContratoProps {
  handleClose: () => void;
  setContrato: ContratosImoveis|any|{}
}

export interface OwnerClient {
  name: string;
  CPF: Number;
};

export interface ContratosImoveis {
  register: string;
  title: string;
  body: string;
  rent: Boolean,
  sell: Boolean,
  endereco_imovel: Object | null;
  owner_contrato: OwnerClient;
  client_contrato: OwnerClient;
  date_start: string | null;
  date_end: string | null;
};

const FormAddContrato: React.FunctionComponent<IFormAddContratoProps> = (props) => {
  const [show, setShow] = useState<boolean>(true);
  const [contrato, setContrato] = useState<ContratosImoveis|{}>({});
  const [areOwner, setAreOwner] = useState<string>('');
  const [areClient, setAreClient] = useState<string>('');
  const [register, setRegister] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [ownerName, setOwnerName] = useState<string>('');
  const [ownerCPF, setOwnerCPF] = useState<Number>(0);
  const [clientName, setClientName] = useState<string>('');
  const [clientCPF, setClientCPF] = useState<Number>(0);
  const [dateStart, setDateStart] = useState<string>('');
  const [dateEnd, setDateEnd] = useState<string>('');

  const handleSend = () => {
    const contrato_obj = {
      register: register,
      title: title,
      body: body,
      rent: true,
      sell: false,
      endereco_imovel: {
        rua: 'Avenida Rebouças',
        numero: 4333
      },
      owner_contrato: { name: ownerName, CPF: ownerCPF },
      client_contrato: { name: clientName, CPF: clientCPF },
      created_at: new Date(),
      date_start: dateStart,
      date_end: dateEnd
    };
    props.setContrato(contrato_obj);
    setShow(false);
  };

  return (
    <div className='form form_add_contrato_component'>
      <Modal show={show} onHide={props.handleClose} className='main_form_add_contrato' animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'rgb(110, 72, 0)'}}>Adicionar contrato de imóvel</Modal.Title>
        </Modal.Header>
      <Form className='form_add_contrato'>
      <Form.Group className='mb-3' controlId='formBasicTitle'>
        <Form.Label>Título</Form.Label>
        <Form.Control type='text' placeholder='' value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setTitle(event.currentTarget.value);
          }} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicTitle'>
        <Form.Label>Registro de Identificação</Form.Label>
        <Form.Control type='text' placeholder='' value={register}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setRegister(event.currentTarget.value);
          }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Texto</Form.Label>
          <Form.Control as="textarea" rows={3} value={body}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setBody(event.currentTarget.value);
            }} />
      </Form.Group>

      Informações do Proprietário:
      <Form.Check type={'checkbox'} value={areOwner}
        label={'Eu sou o proprietário'}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setAreOwner(event.currentTarget.value);
        }} />
      <Form.Group className='mb-3' controlId='formBasicNameOwner'>
        <Form.Label>Nome completo</Form.Label>
        <Form.Control type='text' placeholder='' value={ownerName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setOwnerName(event.currentTarget.value);
          }} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicCPFOwner'>
        <Form.Label>CPF</Form.Label>
        <Form.Control type='text' placeholder='' value={ownerCPF.toString()}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setOwnerCPF(Number(event.currentTarget.value));
          }} />
      </Form.Group>

      Informações do Cliente:
      <Form.Check type={'checkbox'}
        label={'Eu sou o cliente'} value={areClient}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setAreClient(event.currentTarget.value);
        }} />
      <Form.Group className='mb-3' controlId='formBasicNameClient'>
        <Form.Label>Nome completo</Form.Label>
        <Form.Control type='text' placeholder='' value={clientName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setClientName(event.currentTarget.value);
          }} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicCPFClient'>
        <Form.Label>CPF</Form.Label>
        <Form.Control type='text' placeholder='' value={clientCPF.toString()}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setClientCPF(Number(event.currentTarget.value));
          }} />
      </Form.Group>
      
      <h6>Período do contrato:</h6>
      <Form.Group className='mb-3' controlId='formBasicDateStart'>
        <Form.Label>Início:</Form.Label>
        <Form.Control type='date' placeholder='' value={dateStart}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setDateStart(event.currentTarget.value);
        }} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicDateEnd'>
        <Form.Label>Fim:</Form.Label>
        <Form.Control type='date' placeholder='' value={dateEnd}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setDateEnd(event.currentTarget.value);
        }} />
      </Form.Group>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
            Cancelar
          </Button>
        <Button variant='warning'
        onClick={handleSend}>
          Enviar
        </Button>
      </Modal.Footer>
      </Form>
      </Modal>
    </div>
  );
}

export default FormAddContrato;

  