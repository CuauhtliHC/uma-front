import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Navbar from './components/Navbar.jsx';
import Links from './routes/routes.jsx';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Navbar />
        <Container sx={{ mt: '66px', padding: 0 }}>
          <Links />
        </Container>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
