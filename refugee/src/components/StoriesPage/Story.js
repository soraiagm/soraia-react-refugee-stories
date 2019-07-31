import React from 'react';


const Story = props => {
    const story = props.stories.find(i => String(i.id) === props.match.params.id);
    
    return (
        <div className="story-container">
            <h2>{story.title}</h2>
            <h2>{story.highlight}</h2>
            <p>{story.story}</p>

        <div>
            <img src={story.imageUrl} alt={Story.name} />
        </div>
        </div>
    );
}


export default Story;