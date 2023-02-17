import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Navbar from './components/Navbar.jsx';
import Links from './routes/routes.jsx';
import { user } from './state/user.jsx';

function App() {
  const dataUser = useRecoilValue(user);
  return (
    <BrowserRouter>
        {dataUser ? <Navbar /> : null}
        <Container sx={{ mt: '66px', padding: 0 }}>
          <Links />
        </Container>
    </BrowserRouter>
  );
}

export default App;
