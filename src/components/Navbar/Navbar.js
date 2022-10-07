import { Link } from 'react-router-dom'
import Container from '../layout/Container/Container'
import './Navbar.css'
import Logo from '../../img/costs_logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <Link to="/">
          <img src={Logo} />
        </Link>
        <ul className="list">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="item">
            <Link to="/about">about</Link>
          </li>
          <li className="item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}
