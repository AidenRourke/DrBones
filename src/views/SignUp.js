import React, {Component} from "react";
import styled from "styled-components";
import axios from "axios";

import {Input, Button, Link} from "../components";

const Error = styled.div`
  color: #ff0051;
  padding-top: 5px;
  height: 30px;
`;

export default class SignUp extends Component {
    state = {
        username: "",
        password: "",
        error: ""
    };

    componentWillMount() {
        window.addEventListener("keypress", this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener("keypress", this.handleKeyDown);
    }

    handleKeyDown = e => {
        const key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            this.handleSubmit();
        }
    };

    handleSubmit = async () => {
        const {username, password} = this.state;

        const response = await axios.post("https://drbones.herokuapp.com/signUp", {username, password});

        if (response.data.passwordError) {
            this.setState({error: response.data.passwordError})
        } else {
            document.cookie = response.data.userId;
            this.props.history.push('/')
        }
    };

    render() {
        const {username, password, error} = this.state;

        return <div>
            <h1>Sign Up</h1>
            <Input value={username} placeholder="username" style={{borderRadius: "5px 5px 0 0"}}
                   onChange={e => this.setState({username: e.target.value, error: ""})}/>
            <Input value={password} placeholder="password" type="password"
                   onChange={e => this.setState({password: e.target.value, error: ""})}/>
            <Button disabled={!username || !password} onClick={this.handleSubmit} style={{borderRadius: "0 0 5px 5px"}}>sign
                up</Button>
            <Error>{error}</Error>
            <Link to="/Login">Log In</Link>
        </div>
    }
};
