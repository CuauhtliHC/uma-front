import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Navbar from './components/Navbar.jsx';
import Links from './routes/routes.jsx';
import { user } from './state/user.jsx';
import { PrincipalContainer } from './statics/styles/pincipalContainer.jsx';

function App() {
  const dataUser = useRecoilValue(user);
  return (
    <BrowserRouter>
        {dataUser ? <Navbar /> : null}
        <PrincipalContainer>
          <Links />
        </PrincipalContainer>
    </BrowserRouter>
  );
}

export default App;
