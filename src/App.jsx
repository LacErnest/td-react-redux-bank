import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserPage from './pages/UserPage'
import AccountPage from './pages/AccountPage'
import TransacPage from './pages/TransacPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" exact element={<UserPage />} />
            <Route path="/comptes" exact element={<AccountPage />} />
            <Route path="/transactions" exact element={<TransacPage />} />
          </Routes>  
      </div>
    </Router>
  )
}

export default App
