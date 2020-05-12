import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export default props => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbutton'/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="topnav">
                    <Link to='/jasper' className="btn btn-one">Home</Link>
                    <Link to='/about' className="btn btn-one">About</Link>
                    <Link to='/skills' className="btn btn-one">Skills</Link>
                    <Link to='/projects' className="btn btn-one">Projects</Link>
                    <Link to='/contact' className='contact btn btn-one'>Contact</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </header>
    )
}