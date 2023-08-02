import React from 'react'
import logo from './logs.png';
import Homepage from '../../pages/Homepage/index'
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" height="30" className="mr-2" />
            BookNest
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/books">Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/borrow">Borrow</a>
              </li>
              {/* Add more navigation items as needed */}
            </ul>
          </div>
          <div>
            <Link to="/users/register" className="btn btn-light mr-2">Register</Link>
            <Link to="/users/login" className="btn btn-outline-light">Login</Link>
          </div>
        </div>
      </nav>
      



  )
}

export default NavigationBar