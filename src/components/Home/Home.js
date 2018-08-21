import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Container, Badge} from 'reactstrap';


export default class Home extends Component {
    render() {
        return (
            <Container>
            <div>
            <h1>Hello, <Link to={'/login'}>log in</Link> or <Link to={'/register'}>register</Link> <Badge color="secondary"></Badge></h1>
                
            </div>
            </Container>
        )
    }
}
