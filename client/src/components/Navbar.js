// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function NavBar()
{
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  )
}