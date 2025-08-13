import { useNavigate } from 'react-router-dom'
import '../styles/contador.css'
import { useState } from 'react'

function Contador() {
    const [n, setN] = useState(0)
    const navigate = useNavigate()

    const handleSelection = (metodo) => {
        if (metodo === 'usuarios') {
            navigate('/users');
        } else if (metodo === 'home') {
            navigate('/');
        }
    }

    const mais = () => {
        setN(n + 1)
    }

    const menos = () => {
        setN(n - 1)
    }

    const zero = () => {
        setN(0)
    }

    return (
        <div className="conatiner">
            <div className="menu">
                <div className='divButtons'>
                    <button className='home' onClick={() => handleSelection('home')}>HOME</button>
                    <button className='usuarios' onClick={() => handleSelection('usuarios')}>USUÁRIOS</button>
                </div>
            </div>
            <h1>Contador</h1>
            <div className='divContador'>
                <button className='mais' onClick={mais}>+</button>
                <h2>{n}</h2>
                <button className='menos' onClick={menos}>-</button>
            </div>
            <button className='zero' onClick={zero}>Zerar</button>
        </div>
    )
}

export default Contador