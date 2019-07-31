import React, { Component } from 'react';
import { register } from './UserFunctions';


class Register extends Component {
    constructor(props){
        super(props);
        
        this.state ={
                first_name: '',
                last_name: '',
                email: "",
                password: '',
                errors: {}
        }

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

        const newUser = { 
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password 
    } 

        register(newUser).then(res => {
            this.props.history.push(`/login`)
    })
}   

        render() {
            return (
                <div className="container">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1>Register</h1>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="Enter your first name"
                            value={this.state.first_name}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Enter your last_name"
                            value={this.state.last_name}
                            onChange={this.onChange}
                        /> 
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
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
                    
                    <button type="submit">Register</button>
                  </form>
                </div>
            );
        }
    }    


export default Register;