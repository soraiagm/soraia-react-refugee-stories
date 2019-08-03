import React from 'react';
import axios from 'axios';
import SubmitForm from './SubmitForm';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class SubmitStory extends React.Component {
    constructor(){
        super();
        this.state={ 
            submission:{
                name: '',
                title: '',
                imageurl: '',
                story: '',
            },
            error: '',
            modal: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    handleChanges = event => {
        this.setState({
            submission: {
                ...this.state.submission,
                [event.target.name]: event.target.value
            }
        });
    };

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    submitStory = (event) => {
        event.preventDefault();
        if (!this.state.submission.name || !this.state.submission.title || !this.state.submission.imageurl || !this.state.submission.story) {
            alert("Fill all fields.");
        }

        else{
            axios
                .post("https://refugee-stories.herokuapp.com/api/stories")

                .then(response => {
                    console.log(response);
                    this.toggleModal();
                    this.setState({
                        submission: {
                            name: '',
                            title: '',
                            imageurl: '',
                            story: '',
                        }
                    })
                })

                .catch(err => {
                    console.log(err);
                    alert("Sorry, something went wrong.");
                    this.setState({ error: err });
                });
        }
    };

    render(){
        return(
            <div className="submit-page">
                <h1>Tell Us Your Story</h1>
                <SubmitForm
                    submission={this.state.submission}
                    handleChanges={this.handleChanges}
                    submitStory={this.submitStory}
                />

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader>Thank You!</ModalHeader>

                    <ModalBody>
                        Thank you for your submitting your story. An administrator will review your submission soon.
                    </ModalBody>

                    <ModalFooter>
                        <Link to='/'>
                            <Button className="btn-primary">
                                <span className="submit-story-link">View Stories</span>
                            </Button>{' '}
                        </Link>

                        <Button className="btn" onClick={this.toggleModal}>
                            <span className="submit-story-text">Submit Another Story</span>
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}

export default SubmitStory;