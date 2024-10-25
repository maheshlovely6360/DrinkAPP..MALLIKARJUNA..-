import {Link} from 'react-router-dom'

const NavigationBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Drink Mixer
    </Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default NavigationBar
