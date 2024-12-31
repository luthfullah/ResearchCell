import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles/Navbar.css';

const Navbarr = () => {
  return (
    <nav className="navbarr">
      <div className="navbar-containerr">
        {/* Logo */}
        {/* <div className="navbar-logoo">
          <NavLink to="/" className="nav-linkk">
            MyApp
          </NavLink>
        </div> */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/Picture2.png"
            width={40}
            height={40}
            alt="App Logo"
            className="me-2"
          />
          <span className="font-weight-bold text-white">Migration Research Cell</span>
        </Navbar.Brand>

        {/* Navigation Links */}
        
        <ul className="navbar-linkss">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-linkk activee' : 'nav-linkk'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'nav-linkk activee' : 'nav-linkk'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'nav-linkk activee' : 'nav-linkk'
              }
            >
              Contact
            </NavLink> */}
          </li>
          <li>
            <NavLink
              to="/pdf"
              className={({ isActive }) =>
                isActive ? 'nav-linkk activee' : 'nav-linkk'
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? 'nav-linkk activee' : 'nav-linkk'
              }
            >
              Gallery
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbarr;
