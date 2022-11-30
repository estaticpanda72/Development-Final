import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import selectFilterType from './App.js'


function Collapsible(prop) {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Nav onSelect={selectFilterType}>
    <Nav.Item><Nav.Link eventKey="All">Brown U Freshman Dorms</Nav.Link></Nav.Item>
    <NavDropdown title="Bathroom filter" id="collasible-nav-dropdown">
      <NavDropdown.Item><Nav.Link eventKey="private">private</Nav.Link></NavDropdown.Item>
      <NavDropdown.Item><Nav.Link eventKey="semi-private">semi-private</Nav.Link></NavDropdown.Item>
      <NavDropdown.Item><Nav.Link eventKey="communal">communal</Nav.Link></NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Location filter" id="collasible-nav-dropdown">
      <NavDropdown.Item><Nav.Link eventKey="north">north</Nav.Link></NavDropdown.Item>
      <NavDropdown.Item> <Nav.Link eventKey="south">south</Nav.Link></NavDropdown.Item>
    </NavDropdown>
    </Nav>

    <Nav>
      <NavDropdown title="Sqrt Ft Sorting" id="collasible-nav-dropdown">
      <NavDropdown.Item>Low-High</NavDropdown.Item>
      <NavDropdown.Item>High-Low</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Navbar>
  );
}
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdownMenuLink"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Location Filter
//             </a>
//             <div
//               className="dropdown-menu"
//               aria-labelledby="navbarDropdownMenuLink"
//             >
//               <a className="dropdown-item" href="#">
//                 Name
//               </a>
//               <a className="dropdown-item" href="#">
//                 Price
//               </a>
//               <a className="dropdown-item" href="#">
//                 Done
//               </a>
//             </div>


export default Collapsible;