import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const { isAdmin, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <a href="https://joimmanuel.github.io/cessa_memories/#/" className="navbar-brand">
        <span className="brand-icon">✦</span>
        <span>Cessa Journey in AdIns</span>
      </a>
      <div className="navbar-links">
        <a href="https://joimmanuel.github.io/cessa_memories/#/">Gallery</a>
        {isAdmin && (
          <>
            <Link to="/admin">Admin</Link>
            <button onClick={handleLogout} className="btn-logout">Logout</button>
          </>
        )}
      </div>
    </nav>
  )
}
