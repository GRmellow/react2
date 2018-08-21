import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class UserRow extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        edit: PropTypes.func.isRequired
    };

    _showRole = role => {
        switch (role) {
            case 1:
                return 'Admin';
            case 2:
                return 'User';
            default:
                return 'Unknown'
        }
    };

    _edit = (user) => {
        const {edit} = this.props;

        edit && edit(user);
    };


    deleteUser = (user) => {
        console.log(user)
            axios.delete('http://api.tasks.local/v1/admin/user/'+user.id).then(Response => {
                console.log(Response)
            let data = this.state.data;
            data.splice(user, 1);
            this.setState ({
                data: data
            })
        }).catch(error =>{
            console.log(error)
        })
        }
    render() {
        const {user} = this.props;

        return (
            <Row>
                
                <Col xs={1}>{user.id}</Col>
                <Col xs={3}>{user.name}</Col>
                <Col xs={4}>{user.email}</Col>
                <Col xs={2}>{this._showRole(user.role_id)}</Col>
                <Col xs={2}>
                    <Button color="secondary" size="sm" onClick={() => this._edit(user)}>Edit</Button>

                    <Button color="danger" size="sm" onClick={() => this.deleteUser(user)}>Delete</Button>
                </Col>
            </Row>
        );
    }
}