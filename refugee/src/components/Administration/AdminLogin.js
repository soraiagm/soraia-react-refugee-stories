import React, { Component } from 'react';
import  jwt_decode  from 'jwt-decode';

class AdminLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            errors: {}
        }
}

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h1>Admin log in</h1>
                </div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{this.state.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{this.state.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                    </tbody>
                </table>     
            </div>     
        );
    }
}   

export default AdminLogin;