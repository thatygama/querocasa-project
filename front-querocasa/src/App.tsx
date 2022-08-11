import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './views/public/components/header';
import HomePage from './views/public/homepage';
import Alugar from './views/public/alugar';
import Comprar from './views/public/comprar';
import Login from './views/public/login';
import RegistrarUsuario from './views/public/registrar-usuario';
import DashboardUserMainPage from './views/dashboard-user/main-page';
import MeusContratos from './views/dashboard-user/meus-contratos';
import VerImoveis from './views/dashboard-user/ver-imoveis';
import SidebarDashboard from './views/dashboard-user/components/sidebar';

const App = () => {
  const [user, setUser] = useState<Object>({});
  const [userEmail, setUserEmail] = useState<string>('');
  const [auth, setAuth] = useState<Boolean>(false);
  const [token, setToken] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (window.localStorage.getItem('auth') === 'true')
      setAuth(true);
    else
      setAuth(false);
  }, []);

  return (
    <div className={auth ? 'dashboard_pages' : 'public_pages'}>
    <BrowserRouter>
      { auth ? 
        <SidebarDashboard setAuth={setAuth}/>
        : <Header />
      }
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/alugar' element={<Alugar />} />
                <Route path='/comprar' element={<Comprar />} />
                <Route path='/login' element={<Login setAuth={setAuth} setUser={setUser} />} />
                <Route path='/novo-usuario' element={<RegistrarUsuario />} />
                <Route path='/usuario' element={auth ? <DashboardUserMainPage /> : <Login setAuth={setAuth} setUser={setUser} /> } />
                <Route path='/usuario/contratos' element={auth ? <MeusContratos /> : <Login setAuth={setAuth} setUser={setUser} /> } />
                <Route path='/usuario/imoveis' element={auth ? <VerImoveis /> : <Login setAuth={setAuth} setUser={setUser} /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
