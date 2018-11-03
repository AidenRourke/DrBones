import React, {Component} from "react";
import styled from "styled-components";
import axios from "axios";

import {Input, Button, Link} from "../components";

const Error = styled.div`
  color: #ff0051;
  padding-top: 5px;
  height: 30px;
  padding-bottom: 10px;
`;

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        failed: false
    };

    componentWillMount() {
        window.addEventListener("keypress", (e) => {
            const key = e.which || e.keyCode;
            if (key === 13) { // 13 is enter
                this.handleSubmit();
            }
        });
    }

    componentWillUnmount(){
        window.removeEventListener("keypress");
    }

    handleSubmit = async () => {
        const {username, password} = this.state;
        const response = await axios.post("https://drbones.herokuapp.com/login", {username, password});
        if (!response.data.error) {
            document.cookie = response.data.userId;
            this.props.history.push('/');
        } else {
            this.setState({failed: true});
        }
    };

    render() {
        const {username, password, failed} = this.state;

        return <div>
            <h1>Login</h1>
            <Input value={username} placeholder="username" style={{borderRadius: "5px 5px 0 0", marginBottom: 1}}
                   onChange={e => this.setState({username: e.target.value, failed: false})}/>
            <Input value={password} placeholder="password" type="password"
                   onChange={e => this.setState({password: e.target.value, failed: false})}/>
            <Button disabled={!username || !password} onClick={this.handleSubmit}
                    style={{borderRadius: "0 0 5px 5px"}}>login</Button>
            <Error>{failed && "Invalid username or password"}</Error>
            <Link to="/SignUp">Sign Up</Link>
        </div>
    }
};
