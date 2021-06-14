import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Digimon</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>

                        <Nav.Link href="/favorite">favoriteDigimon</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header
