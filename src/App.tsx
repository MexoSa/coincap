import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import CryptoPage from './layout/pages/CryptoPage';
import HomePage from './layout/pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='/:id' element={<CryptoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
