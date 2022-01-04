import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';

import { TextField, Button } from '@mui/material';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            usertype: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        let userList = JSON.parse(localStorage.getItem("UserList"));
        if (!userList) {
            userList = []
        }
        if (userList && userList.length > 0) {
            let foundedEmail = userList && userList.filter(item => item.email === this.state.email)
            if (foundedEmail && foundedEmail.length > 0) {
                alert("This email is already exist.. please try another one")
            } else {
                this.registerUser(userList)
            }
        } else {
            this.registerUser(userList)
        }
    }
    registerUser(userList) {
        alert("Congratulations.. user registered successfully.")
        userList.push(this.state)
        localStorage.setItem("UserList", JSON.stringify(userList))
        this.setState({
            name: "",
            email: "",
            password: "",
            usertype: ""
        })
    }

    render() {
        return (
            <div className="App">
                <h2 style={{ marginTop: "20px" }}>Sign Up</h2>
                <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <TextField
                        label="Name"
                        id="name"
                        onChange={this.handleChange}
                        type="text"
                        variant="standard"
                        value={this.state.name}
                        required
                    />
                    <br />
                    <TextField
                        label="Email"
                        id="email"
                        onChange={this.handleChange}
                        type="email"
                        variant="standard"
                        value={this.state.email}
                        required
                    />
                    <br />
                    <TextField
                        label="Password"
                        id="password"
                        onChange={this.handleChange}
                        type="password"
                        variant="standard"
                        value={this.state.password}
                        required
                    />
                    <br />
                    <FormControl fullWidth>
                        <NativeSelect
                            value={this.state.usertype}
                            inputProps={{
                                name: 'usertype',
                                id: 'usertype',
                            }}
                            onChange={this.handleChange}
                            required
                        >
                            <option value="">Select User Type</option>
                            <option value={"admin"}>Admin</option>
                            <option value={"organization"}>Organization</option>
                            <option value={"user"}>User</option>
                        </NativeSelect>
                    </FormControl>
                        
                    <br />
                    <Button type="submit" variant="contained">
                        Sign Up
                    </Button>
                    <br />
                    <Link to="/">Sign In</Link>
                </form>
            </div>
        );
    }
}
