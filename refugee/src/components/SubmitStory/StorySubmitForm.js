import React from 'react';
import axios from 'axios';

class StorySubmitForm extends React.Component {
    state = {
        name: '',
        title: '',
        story: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addStory = (event) => {
        event.preventDefault()

        const { name, title, story } = this.state
        const payload = { name, title, story }

        axios.post()
            .then((response) => {
                this.setState({
                    errorMessage: null
                })
                
            })
            .catch((err) => {
                this.setState({
                    errorMessage: err.response.data.error
                })
            })
        }

        render() {
            const { name, title, story } = this.state

            return (
                <form onSubmit={this.addStory}>
                    <div>
                        <input type="text" name="name" placeholder="Name" value={ name } onChange={this.handleChange} />
                        <input type="text" name="title" placeholder="Title of your story" value= { title } onChange={this.handleChange} />
                        <input type="text" name="story" placeholder="Enter your story here" value= { story } onChange={this.handleChange} />

                        <button className="Button" type="submit">Submit</button>
                    </div>
                </form>
            )
        }
}

export default StorySubmitForm;