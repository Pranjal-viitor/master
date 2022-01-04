import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function SignIn() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleSubmit(event) {
        event.preventDefault();
        const userList = JSON.parse(localStorage.getItem("UserList"));
        if (userList && userList.length > 0) {
            let foundedUser = userList && userList.filter(item => item.email === email && item.password === password);
            if (foundedUser && foundedUser.length > 0) {
                let userObj = {
                    name: foundedUser[0].name,
                    email: foundedUser[0].email,
                    usertype: foundedUser[0].usertype
                }
                localStorage.setItem('isLoggedIn',true)
                localStorage.setItem('loggedInUserDetail',JSON.stringify(userObj))
                localStorage.setItem('userRole',userObj.usertype)
                navigate('/dashboard');
            } else {
                handleUserNotFound()
            }
        } else {
            handleUserNotFound()
        }
    }

    function handleUserNotFound() {
        alert("This user is not found please try with different credentials.");
        return;
    }

    return (
        <div className="App">
            <h2 style={{ marginTop: "20px" }}>Sign In</h2>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <TextField
                    label="Email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    variant="standard"
                    value={email}
                    required
                />
                <br />
                <TextField
                    label="Password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    variant="standard"
                    value={password}
                    required
                />
                <br />
                <Button type="submit" variant="contained">Sign In</Button>

                <br />
                <Link to="/signup">Sign Up</Link>
            </form>
        </div>
    );
}

export default SignIn