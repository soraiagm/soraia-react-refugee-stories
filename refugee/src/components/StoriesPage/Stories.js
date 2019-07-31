import React from 'react';
import { Link } from "react-router-dom";


    
    const Stories = props => {
        return (
            <div className="stories-wrapper">
                {props.stories.map( (story) => (
                    <Link to="{`/story/{story.id}`}" className="story-card" key={story.id}>
                        <h2>{story.title}</h2>
                        <h3>{story.highlight}</h3>
                        <p>{story.story}</p>
                        
                        <img
                            className="story-list-image"
                            src={story.imageUrl}
                            alt={story.name}
                        />
                    </Link>
                ))}
            </div>
        );
    }

    export default Stories;