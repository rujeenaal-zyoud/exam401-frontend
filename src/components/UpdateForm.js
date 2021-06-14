import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
export class UpdateForm extends Component {
    render() {
        return (

            <div>
                <Form onSubmit={(e) => this.props.updatData(e)} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => this.props.updateName(e)} value={this.props.name} type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => this.props.updateImg(e)} value={this.props.img} type="text" placeholder="Enter URL" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => this.props.updateLevel(e)} value={this.props.level} type="text" placeholder="Enter level" />
                    </Form.Group>




                    <Button   onClick={(e) => this.props.updatData(e)}variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}



export default UpdateForm
