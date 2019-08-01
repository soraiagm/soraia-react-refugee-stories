// import React from 'react';
// import axios from 'axios';

// class SubmitForm extends React.Component {
//     state = {
//         name: '',
//         title: '',
//         story: ''
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     addStory = (event) => {
//         event.preventDefault()

//         const { name, title, story } = this.state
//         const payload = { name, title, story }

//         axios.post('http:localhost:3000/', payload)
//             .then((response) => {
//                 this.setState({
//                     errorMessage: null
//                 })
                
//             })
//             .catch((err) => {
//                 this.setState({
//                     errorMessage: err.response.data.error
//                 })
//             })
//         }

//         render() {
//             const { name, title, story } = this.state

//             return (
//                 <form onSubmit={this.addStory}>
//                     <div>
//                         <input type="text" name="name" placeholder="Name" value={ name } onChange={this.handleChange} />
//                         <input type="text" name="title" placeholder="Title of your story" value= { title } onChange={this.handleChange} />
//                         <input type="text" name="story" placeholder="Enter your story here" value= { story } onChange={this.handleChange} />

//                         <button className="Button" type="submit">Submit</button>
//                     </div>
//                 </form>
//             )
//         }
// }

// export default SubmitForm;

import React from 'react';

const SubmitForm = props => {
    return (
        <div>
            <form
                className='submit-form'
                onSubmit={props.submitStory}
                autoComplete="off"
            >
                <div className="short-inputs">
                    <input
                        className='submit-input'
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={props.submission.name}
                        onChange={props.handleChanges}
                    ></input>

                    <input
                        placeholder="Title"
                        type="text"
                        name="title"
                        value={props.submission.title}
                        onChange={props.handleChanges}
                    ></input>

                    <input
                        placeholder="Paste image URL"
                        type="text"
                        name="imageurl"
                        value={props.submission.imageurl}
                        onChange={props.handleChanges}
                    ></input>
                </div>

                <textarea
                    placeholder="Enter Story Here"
                    type="text"
                    name="story"
                    wrap="hard"
                    value={props.submission.story}
                    onChange={props.handleChanges}
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitForm;