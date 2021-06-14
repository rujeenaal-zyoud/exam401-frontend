
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';
import React, { Component } from 'react'

class FavDigCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={this.props.digimon.img} />
                    <Card.Body>
                        <Card.Title>{this.props.digimon.name}</Card.Title>
                        <Card.Title>{this.props.digimon.level}</Card.Title>

                        <Button onClick={() => this.props.deleteData(this.props.digimon._id)} variant="primary">deleteData</Button>

                        <Button onClick={() => this.props.updateForm(this.props.index)} variant="primary">updateData</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default FavDigCard
