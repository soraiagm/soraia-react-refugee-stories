import React from 'react';
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

//     addStory = (event => {
//         event.preventDefault()

//         const { name, title, story } = this.state
//         const payload = { name, title, story }

//         axios.post("https://refugee-stories.herokuapp.com/api/stories", payload)
//             .then((response) => {
//                 console.log(response.data)
//                 this.setState({
//                     errorMessage: null
//                 })
//                 .catch((err) => {
//                     this.setState({
//                         errorMessage: err.response.data.error
//                     })
//                 })
//             })
//     })

//     render() {
//         const { name, title, story } = this.state
        
//         return (
//             <form onSubmit={this.addStory}>
//                 <h1> Submit Your Story </h1>

//                 <div className="Text-form">
//                     <input 
//                         type="text"
//                         name="name"
//                         placeholder="Name"
//                         value={name}
//                         onChange={this.handlechange} />
//                     <input 
//                         type="text"
//                         name="title"
//                         placeholder="Title"
//                         value={title}
//                         onChange={this.handlechange} />
//                     <input 
//                         type="text"
//                         name="story"
//                         placeholder="Story"
//                         value={story}
//                         onChange={this.handlechange} />

//                     <button className="Button" type="submit">Submit Story</button>
                    
//                 </div>
//             </form>
//         )
//     }
// }

// export default SubmitForm;


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