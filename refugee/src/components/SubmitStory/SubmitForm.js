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