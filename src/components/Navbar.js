// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import './styles/Navbar.css';

// const Navbarr = () => {
//   return (
//     <nav className="navbarr">
//       <div className="navbar-containerr">
//         {/* Logo */}
//         {/* <div className="navbar-logoo">
//           <NavLink to="/" className="nav-linkk">
//             MyApp
//           </NavLink>
//         </div> */}
//           <Navbar.Brand href="/" className="d-flex align-items-center">
//           <img
//             src="/Picture2.png"
//             width={40}
//             height={40}
//             alt="App Logo"
//             className="me-2"
//           />
//           <span className="font-weight-bold text-white">Migration Research Cell</span>
//         </Navbar.Brand>

//         {/* Navigation Links */}

//         <ul className="navbar-linkss">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? 'nav-linkk activee' : 'nav-linkk'
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive ? 'nav-linkk activee' : 'nav-linkk'
//               }
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             {/* <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive ? 'nav-linkk activee' : 'nav-linkk'
//               }
//             >
//               Contact
//             </NavLink> */}
//           </li>
//           <li>
//             <NavLink
//               to="/pdf"
//               className={({ isActive }) =>
//                 isActive ? 'nav-linkk activee' : 'nav-linkk'
//               }
//             >
//               Blogs
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/gallery"
//               className={({ isActive }) =>
//                 isActive ? 'nav-linkk activee' : 'nav-linkk'
//               }
//             >
//               Gallery
//             </NavLink>
//           </li>
//         </ul>

//       </div>
//     </nav>
//   );
// };

// export default Navbarr;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./styles/Navbar.css";

export default function Navbarr() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/", active: true },
    { name: "BLOGS", href: "/pdf" },
    { name: "CONTACT", href: "/contact" },
    { name: "GALLERY", href: "/gallery" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <>
      {/* Top layer with full-width logo */}
      <TopNavbar />

      {/* Navigation Bar */}
      <Navbar expand="md" className="border-bottom pageHeader">
        <div>
          {/* Mobile menu button */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsOpen(!isOpen)}
            className="border-0"
          >
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>

          {/* Navigation Links */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={isOpen ? "show" : ""}
          >
            <Nav className="ml-auto ">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link px-3 py-2 text-sm font-medium ${
                    item.active
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export const TopNavbar = () => {
  return (
    <div className="bg-white contai border-bottom">
      <div className="text-center py-2">
        <div
          to="/"
          className="d-flex align-items-center justify-content-center"
        >
          <Image
            className="img-fluid mx-2"
            src="/Picture2.png"
            width={40}
            height={40}
            alt="App Logo"
          />
          <span className="ml-2 h5 font-weight-bold fontTitle">
            MIGRATION RESEARCH CELL
          </span>
        </div>
      </div>
    </div>
  );
};
