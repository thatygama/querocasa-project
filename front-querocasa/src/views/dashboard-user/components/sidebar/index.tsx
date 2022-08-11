import { getAuth, signOut } from 'firebase/auth';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import logo from './images/logo.png';

export interface IDashboardPageProps {
    setAuth: (arg: Boolean) => void
}

const SidebarDashboard: React.FunctionComponent<IDashboardPageProps> = (props) => {
    
    const auth = getAuth();
    const logout = () => {
        signOut(auth).then(() => {
        props.setAuth(false);
        window.localStorage.setItem('auth', 'false');
      }).catch(e => {
        console.log(e.message);
      });
    }
      
    return (
        <div className='sidebar_dashboard'>
            <Container className='logo_dashboard'>
                <Navbar.Brand>
                    <Link to='/usuario'>
                        <div className='logo_querocasa'>
                        <img
                        alt=''
                        src={logo}
                        width='40'
                        height='40'
                        className='d-inline-block align-top'
                        />{' '}
                        <h6>Quero casa!</h6>
                        </div>
                    </Link>
                </Navbar.Brand>
            </Container>
            <div className='menu_itens'>
                <div className='line_break' />
                <div className='menu_item'>
                    <Link to='/usuario'>
                        <div>Menu</div>
                    </Link>
                </div>
                <div className='line_break' />
                <div className='menu_item'>
                    <Link to='/usuario/contratos'>
                        <div>Meus Contratos</div>
                    </Link>
                </div>
                <div className='line_break' />
                <div className='menu_item'>
                    <Link to='/usuario/imoveis'>
                        <div>Ver imóveis</div>
                    </Link>
                </div>
                <div className='line_break' />
                <div className='menu_item'>
                    <Link to='/'>
                        <div onClick={logout}>Logout</div>
                    </Link>
                </div>
            </div>
      </div>
    );
  }
  
  export default SidebarDashboard;