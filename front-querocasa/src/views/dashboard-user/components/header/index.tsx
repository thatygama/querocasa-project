import { getAuth, signOut } from 'firebase/auth';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './index.css';

export interface IDashboardPageProps {
    setAuth: (arg: Boolean) => void
}

const HeaderDashboard: React.FunctionComponent<IDashboardPageProps> = (props) => {
    
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
        <div className='header_dashboard'>
        <Nav variant='pills' defaultActiveKey='/home'>
            <Nav.Item>
                <Nav.Link><Link to='/usuario'>Menu</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link to='/usuario/contratos'>Meus contratos</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link to='/usuario/imoveis'>Ver imóveis</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={logout}><Link to='/'>Logout</Link></Nav.Link>
            </Nav.Item>
            </Nav>
      </div>
    );
  }
  
  export default HeaderDashboard;