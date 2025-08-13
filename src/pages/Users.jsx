import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import '../styles/users.css';
import { useNavigate } from 'react-router-dom'

function Users() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:3001/peoples')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Erro ao buscar usuários:", err));
  }, [])

  const navigate = useNavigate()

    const handleSelection = (metodo) => {
        if (metodo === 'contador') {
            navigate('/contador');
        } else if (metodo === 'home') {
            navigate('/');
        }
    }

  return (
    <div className="App">
      <div className="menu">
        <div className='divButtons'>
          <button className='home' onClick={() => handleSelection('home')}>HOME</button>
          <button className='contadorButton' onClick={() => handleSelection('contador')}>CONTADOR</button>
        </div>
      </div>
      <h1>Usuários</h1>
      <div className="user-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users