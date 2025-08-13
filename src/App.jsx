import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const handleSelection = (metodo) => {
    if (metodo === 'usuarios') {
      navigate('/users');
    } else if (metodo === 'contador') {
      navigate('/contador');
    }
  }

  return (
    <div className='container'>
      <div className='titulos'>
        <h1>HOME</h1>
        <h2>Bem-vindo!</h2>
      </div>

      <div className='divButtons'>
        <button className='contadorButton' onClick={() => handleSelection('contador')}>CONTADOR</button>
        <button className='usuarios' onClick={() => handleSelection('usuarios')}>USUÁRIOS</button>
      </div>
    </div>
  )
}

export default App