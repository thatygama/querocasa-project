import { ChangeEvent, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css';

export interface IFormAddPostProps {
  handleClose: () => void;
  setImovel: PostsImoveis|any|{};
}

interface PostsImoveis {
  id: string;
  title: string;
  subtitle: string | null;
  body: string;
  rent: Boolean;
  sell: Boolean;
  comments: string[] | null;
  endereco_imovel: Object;
  created_at: Date;
  date_start: string | null;
  date_end: string | null;
};

const FormAddPost: React.FunctionComponent<IFormAddPostProps> = (props) => {
  const [show, setShow] = useState<boolean>(true);
  const [imovel, setImovel] = useState<PostsImoveis|{}>({});
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [dateStart, setDateStart] = useState<string>('');
  const [dateEnd, setDateEnd] = useState<string>('');

  const handleSend = () => {
    const imovel_obj = {
      title: title,
      subtitle: subtitle,
      body: body,
      rent: true,
      sell: true,
      comments: null,
      endereco_imovel: {
        rua: 'Avenida Paulista',
        numero: 598432
      },
      created_at: new Date(),
      date_start: dateStart,
      date_end: dateEnd
    };
    props.setImovel(imovel_obj);
    setShow(false);
  };

  return (
    <div className='form form_add_post_component'>
      <Modal show={show} onHide={props.handleClose} className='main_form_add_post' animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'rgb(110, 72, 0)'}}>Adicionar publicação de imóvel</Modal.Title>
        </Modal.Header>
      <Form className='form_add_post'>
      <Form.Group className='mb-3' controlId='formBasicTitle'>
        <Form.Label>Título</Form.Label>
        <Form.Control type='text' placeholder='' value={title}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setTitle(event.currentTarget.value);
                  }} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicSubtitle'>
        <Form.Label>Subtítulo</Form.Label>
        <Form.Control type='text' placeholder='' value={subtitle}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setSubtitle(event.currentTarget.value);
                  }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Texto</Form.Label>
          <Form.Control as="textarea" rows={3} value={body}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setBody(event.currentTarget.value);
            }} />
      </Form.Group>
      
      <h6>Disponível:</h6>
      <Form.Group className='mb-3' controlId='formBasicDateStart'>
        <Form.Label>A partir de:</Form.Label>
        <Form.Control type='date' placeholder='' value={dateStart}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setDateStart(event.currentTarget.value);
        }} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicDateEnd'>
        <Form.Label>Até:</Form.Label>
        <Form.Control type='date' placeholder='' value={dateEnd}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setDateEnd(event.currentTarget.value);
        }} />
      </Form.Group>
        
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
            Cancelar
          </Button>
        <Button variant='warning' onClick={handleSend}>
          Enviar
        </Button>
        </Modal.Footer>
      </Form>
      </Modal>
    </div>
  );
}

export default FormAddPost;

    