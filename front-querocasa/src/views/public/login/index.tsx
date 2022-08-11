import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ChangeEvent, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import './index.css';

export interface ILoginPageProps {
  setAuth: (arg: Boolean) => void,
  setUser: (arg: Object) => void
}

const Login: React.FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const loginWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      if (userCredential) {
        const user = userCredential.user;
        props.setUser(user);
        props.setAuth(true);
        window.localStorage.setItem('auth', 'true');
        console.log(user)
        navigate('/usuario');
      }
    })
    .catch(e => {
      console.log(e.message);
    });
    };

  const loginWithGoogle = async () => {
    signInWithPopup(auth, provider)
    .then(loggedUser => {
      if (loggedUser) {
        props.setAuth(true);
        window.localStorage.setItem('auth', 'true');
        console.log(loggedUser)
        navigate('/usuario');
      }
    }).catch(e => {
      console.log(e.message);
    })
    .finally(() => {
    });
  };

    return (
      <div className='main login'>
        <h2 style={{ color: 'rgb(110, 72, 0)'}}>Acesse sua conta</h2>
        
        <div className='main_form_login'>
        <Form className='form_login'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Email cadastrado' value={email}
          onChange={handleChangeEmail} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Senha</Form.Label>
          <Form.Control type='password' placeholder='Senha mínima: 6 dígitos' value={password}
          onChange={handleChangePassword} />
        </Form.Group>
          <div className='botoes_login'>
          <Button variant='warning' className='mt-3'
          onClick={loginWithEmail}>
            Entrar
          </Button>
          <Button variant='primary' className='mt-2'
            onClick={loginWithGoogle}>
            Entrar com o Google
            <i className="fa fa-google" />
          </Button>
          </div>
          <div>
            <p className='mt-5 text-center'>Ainda não é cadastrado? <u><Link to='/novo-usuario'>Cadastre-se!</Link></u></p>
          </div>
        </Form>
        </div>
      </div>
    );
  }
  
  export default Login;

    