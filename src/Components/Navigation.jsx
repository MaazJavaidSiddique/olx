import React from 'react';
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap'
import MegaDrop from './MegaDrop';
import { Container,Row,Col} from 'react-bootstrap';


class Navigation extends React.Component{
    render(){
      
        return(
          
          <div>
          <Navbar className="navbar" expand="lg">
          <Navbar.Brand href="#home"></Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />           */}
            <Nav className="mr-auto">
              <NavDropdown title="ALL CATEGORIES" id="basic-nav-dropdown">
                <NavDropdown.Item href=""><MegaDrop/></NavDropdown.Item>
                {/* <NavDropdown.Item href=""><MegaDrop/></NavDropdown.Item>
                <NavDropdown.Item href=""><MegaDrop/></NavDropdown.Item> */}
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="#home">Mobile Phone</Nav.Link>
              <Nav.Link href="#link">Car</Nav.Link>
              <Nav.Link href="#link">Motorcycle</Nav.Link>
              <Nav.Link href="#link">Houses</Nav.Link>
              <Nav.Link href="#link">Tv/Video/Audio</Nav.Link>
              <Nav.Link href="#link">Tablets</Nav.Link>
              <Nav.Link href="#link">Land & plot</Nav.Link>
            </Nav>
        </Navbar>
     
          </div>
         
          
          
        )
    }
}
export default Navigation;