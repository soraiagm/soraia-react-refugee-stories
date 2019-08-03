import React from 'react';
import { Link } from "react-router-dom";
import Story from "./Story";
// import Axios from 'axios';


    
const Stories = props => {
        return (
            <div className="stories-wrapper">
                {props.stories.map( (story) => (
                    <Link to="{`/story/{story.id}`}" className="story-card" key={story.id}>
                        <h2>{story.name}</h2>
                        <h3>{story.title}</h3>
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