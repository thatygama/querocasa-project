import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ModalCloseInButtons from '../components/modalCloseInButtons';
import { ChangeEvent, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import './index.css';


const RegistrarUsuario: React.FunctionComponent = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showModal, setShowModal] = useState<Boolean>(false);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const registerNewUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      if (userCredential) {
        const user = userCredential.user;
        setEmail(user.email || '');
        console.log(user)
        setShowModal(true);
      }
    })
    .catch(e => {
      console.log(e.message);
    });
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/login');
  };
  const titleSuccess='Usuário cadastrado!';
  const bodySuccess='Parabéns, você está cadastrado! Acesse o seu usuário com o Email e Senha cadastrados!';

  useEffect(() => {
  }, [showModal]);

  return (
    <div className='main registrar'>
      <h2>Crie sua conta</h2>
      
      <div className='form'>
      <Form className='form_registrar'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Insira seu email para cadastrar' value={email}
          onChange={handleChangeEmail} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Senha</Form.Label>
          <Form.Control type='password' placeholder='Senha mínima: 6 dígitos' value={password}
          onChange={handleChangePassword} />
        </Form.Group>
        <div className='botoes_registrar'>
        <Button variant='warning' className='mt-3'
        onClick={registerNewUser}>
          Registrar
        </Button>
        </div>
        <div>
          <p className='mt-5 text-center'>Já é cadastrado? <u><Link to='/login'>Acesse sua conta!</Link></u></p>
        </div>
      </Form>
      </div>

      { showModal ?
      <ModalCloseInButtons handleCloseDo={handleClose} handleOkDo={handleClose}
        title={titleSuccess} body={bodySuccess} />
      : null }
    </div>
  );
}
  
export default RegistrarUsuario;

    