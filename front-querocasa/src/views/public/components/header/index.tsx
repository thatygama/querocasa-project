import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import CarouselExample from '../carousel';
import './index.css';
import logo from './images/logo.png';

const Header: React.FunctionComponent = () => {
  
    return (
      <div className='header'>
        <Nav variant='pills' defaultActiveKey='/'>
        <Nav.Item>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
                            <div className='logo_querocasa'>
                            <img
                            alt=''
                            src={logo}
                            width='50'
                            height='50'
                            className='d-inline-block align-top'
                            />{' '}
                            <h6>Quero casa!</h6>
                            </div>
                        </Link>
                    </Navbar.Brand>
                </Container>
            </Nav.Item>
            <Nav.Item className='navitem_public'>
                <Nav.Link><Link to='/'>Início</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item className='navitem_public'>
                <Nav.Link><Link to='/alugar'>Alugar</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item className='navitem_public'>
                <Nav.Link><Link to='/comprar'>Comprar</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item className='navitem_public'>
                <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
            </Nav.Item>
            </Nav>
        <CarouselExample />
      </div>
    );
  }
  
  export default Header;