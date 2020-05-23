import React from 'react'

//image
import logo from '../assets/img/navbarlogo.png'

//bootstrap components
import { Navbar, Nav } from 'react-bootstrap'

export default function Navbars() {
    return (
        <Navbar className="navbar-container" expand="lg">
            <Navbar.Brand href="#home"><img className="navbar-logo" src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
