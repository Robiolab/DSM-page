import { DsmLink } from '../link.jsx'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <DsmLink to="/" className="navbar-brand">
          DSM Labs
        </DsmLink>
        <ul className="navbar-links">
          <li><DsmLink to="/lab1">Lab 1: Cinematica RR</DsmLink></li>
          <li><DsmLink to="/lab2">Lab 2: Clasificacion</DsmLink></li>
          <li><DsmLink to="/lab3">Lab 3: Pata Robot</DsmLink></li>
          <li><DsmLink to="/lab4">Lab 4: Vibraciones</DsmLink></li>
        </ul>
      </div>
    </nav>
  )
}
