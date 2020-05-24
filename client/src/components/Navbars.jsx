import React from 'react'
import { useHistory } from 'react-router-dom'

//image
import logo from '../assets/img/navbarlogo.png'

//bootstrap components
import { Navbar, Nav } from 'react-bootstrap'

export default function Navbars() {

    const history = useHistory()

    //functions
    const goTo = path => {
        history.push(path)
    }

    return (
        <Navbar className="navbar-container" expand="lg">
            <Navbar.Brand><img className="navbar-logo" src={logo} onClick={() => goTo('/')}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="link-text">Characters</Nav.Link>
                    <Nav.Link className="link-text">Story</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
