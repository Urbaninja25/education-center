import React from 'react'

import Header from './components/Header'

import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DemosPage from './pages/DemosPage'
import ServicesPage from './pages/ServicesPage'
import PagePage from './pages/PagesPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/demos' element={<DemosPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/pages' element={<PagePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
