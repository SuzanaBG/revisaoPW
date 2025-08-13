import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'
import Users from '../pages/Users'
import Contador from '../pages/Contador'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/users" element={<Users />} />
      <Route path="/contador" element={<Contador />} />
    </Routes>
  )
}

export default Routers