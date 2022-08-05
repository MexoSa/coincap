import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import CryptoPage from './pages/CryptoPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path='/coincap' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='/coincap/:id' element={<CryptoPage />} />
      </Route>
    </Routes>
  )
}

export default App
