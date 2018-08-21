import React, {Component} from 'react';
import axios from 'axios';
import { InputGroup, Button, Input, Container} from 'reactstrap';
import "../../css/Register.css";

export default class Login extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    };

    _onChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    _register = async () => {
        const {name, email, password, } = this.state;

        const response = await axios.post(process.env.REACT_APP_API_URL + 'register', {
           name, email, password
        });
        if (response.data.responseType === "success") {
            this.props.history.push('/login');
            console.log("Success");
        } else {
            console.log('Error');
        }
        
    }

    render() {
        const {name, email, password} = this.state;

        return (
            <div className="input">

            
                
                <Container>
                <p>Register</p>
                <InputGroup>
              
                <Input placeholder="Name" type={'name'} name={'name'} value={name} onChange={this._onChange} />
                </InputGroup>
                <InputGroup>
                <Input placeholder="Email" type={'email'} name={'email'} value={email} onChange={this._onChange} />
                </InputGroup>
                <InputGroup>
                <Input placeholder="Password" type={'password'} name={'password'} value={password} onChange={this._onChange} />
                </InputGroup>
                <Button color="primary" onClick={this._register}>Register</Button>
                </Container>
            </div>
        )
    }
}
