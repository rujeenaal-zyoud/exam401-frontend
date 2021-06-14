import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';
export class DigimonCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={this.props.digimon.img} />
                    <Card.Body>
                        <Card.Title>{this.props.digimon.name}</Card.Title>
                        <Card.Title>{this.props.digimon.level}</Card.Title>

                        <Button onClick={() => this.props.addToFav(this.props.digimon)} variant="primary">add To Fav</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default DigimonCard
