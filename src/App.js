import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Links from './routes/routes.jsx';

function App() {
  return (
    <BrowserRouter>
      <Links />
    </BrowserRouter>
  );
}

export default App;
