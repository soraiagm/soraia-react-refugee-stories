import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AdminLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: "",
                password: ""
            },
            error: ""
        };
    }
    handleChanges = event => {
        this.setState({
            credentials: {
                ...this.state,
                [event.target.name]: event.target.value
            }
        });
    };
    
    login = event => {
        event.preventDefault();
        if(!this.state.credentials.username || this.state.credentials.password){
            alert("Please fill out all fields.");
        }
        else {
            alert("A username was submitted: " + this.state.credentials.username);
            alert("A password was submitted: " + this.state.credentials.password);
            axios
                .get("https://refugee-stories.herokuapp.com/api/stories")
                .then(response => {
                console.log(response);
                })
                .catch(err => {
                    console.log(err);
                    alert("Your username or password isn ot correct.");
                    this.setState({ error: err });
                })
            }
        };

        render() {
            return ( 
                <div className="login-page">
                    <h1>Administrator Login</h1>

                    <form 
                        className="login-form"
                        onFocus={event=> event.target.placeholder=""}
                        onBlur={event=> event.target.placeholder=event.target.name}
                        onSubmit={this.login}
                        autoComplete="off"
                    >
                    <input
                        className="login-input"
                        placeholder="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        className="login-input"
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanges}
                     />
                    
                        <button type="submit">Login</button>
                    </form>

                <div className="login-signup">
                    <span className="login-text">Register as an administrator</span>
                    <Link to="/administration" className="login-link">
                        Sign Up
                    </Link>
                </div>
            </div>
        ); 
    }
}
    


export default AdminLogin;


