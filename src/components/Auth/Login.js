import React, {Component} from 'react';
import axios from 'axios';
import {Container, InputGroup, Button, Input} from 'reactstrap';
import "../../css/Login.css";

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    _onChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    _login = async () => {
        const {email, password} = this.state;

        const response = await axios.post(process.env.REACT_APP_API_URL + 'login', {
            email, password
        });

        if (response && response.data && response.data.data) {
            sessionStorage.setItem('token', response.data.data.jwt);
            this.props.history.push('/users');
        } else {
            //afisam eroare
        }
    };

    render() {
        const {email, password} = this.state;

        return (
            <div className="input">
                <Container>
                <p>Login</p>
                <InputGroup>
                <Input placeholder="Email" type={'text'} name={'email'} value={email} onChange={this._onChange} />
                </InputGroup>
                <InputGroup>
                <Input placeholder="Password" type={'password'} name={'password'} value={password} onChange={this._onChange}/>
                </InputGroup>
                <Button color="primary" onClick={this._login}>Login</Button>
                </Container>
            </div>
        )
    }
}
