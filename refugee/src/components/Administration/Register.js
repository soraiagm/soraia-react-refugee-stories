import React from 'react';
import axios from 'axios';


class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                password: '',
            },
            confirmPass: '',
            error: '',
            
            modal: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    handleChanges = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    handleConfirmPassChanges = event => {
        this.setState({
            confirmPass: event.target.value,
        })
    }
    

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    signUp = (event) => {
        event.preventDefault();
        if (this.state.credentials.password !== this.state.confirmPass) {
            alert("Passwords do not match.");
        } else if (!this.state.credentials.username || !this.state.credentials.password || !this.state.confirmPass) {
            alert("Please fill out all fields.");
        }

        else{
            axios
            .post("https://refugee-stories.herokuapp.com/api/register", this.state.credentials)

            .then(response => {
                console.log(response);
                localStorage.setItem('jwt', response.data.token)
                this.toggleModal();
            })

            .catch(err => {
                console.log(err);
                alert("Something went wrong. Try a different username; the one you have chosen may already be taken.");
                this.setState({ error: err });
            });
        }
    };

    render(){
        return(
            <div className='signup-page'>
                <h1>Administrator Sign Up</h1>
                <form
                    onFocus={event=> event.target.placeholder=""}
                    onBlur={event=> event.target.placeholder=event.target.name}
                    className='signup-form'
                    onSubmit={this.signUp}
                    autoComplete="off"
                >
                    <input
                        className='signup-input'
                        placeholder="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    ></input>

                    <input
                        className='signup-input'
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanges}
                    ></input>

                    <input
                        className='signup-input'
                        placeholder="confirm password"
                        type="password"
                        name="confirm password"
                        value={this.state.confirmPass}
                        onChange={this.handleConfirmPassChanges}
                    ></input>
                    
                    <button type="submit">Sign Up</button>
                </form>

            </div>
        );
    }
}

export default Register;
