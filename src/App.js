import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Links from './routes/routes.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container sx={{ mt: '66px', padding: 0 }}>
        <Links />
      </Container>
    </BrowserRouter>
  );
}

export default App;
