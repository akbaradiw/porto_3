import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import MenuPage from './page/MenuPage'
function App() {

  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
