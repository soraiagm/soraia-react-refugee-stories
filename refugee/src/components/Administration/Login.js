import React, { Component } from 'react';
import { login } from './UserFunctions';


class Login extends Component {
    constructor(props){
        super(props);
        
        this.state ={
                email: '',
                password: '',
                errors: {}
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault()

        const user = { 
            email: this.state.email,
            password: this.state.password
    } 
    
        login(user).then(res => {
        if (res) {
            this.props.history.push(`/AdminLogin`)
        }
    })
}
        render() {
            return (
                <div className="container">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1>Admin sign in</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                     />       
                    
                    <button type="submit">Sign in</button>
                  </form>
                </div>
            );
        }
    }    


export default Login;