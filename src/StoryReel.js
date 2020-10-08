import React from 'react';
import './StoryReel.css';
import Story from './Story.js';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image=""
                profileSrc=""
                title="Manish Mehta"
            />
            <Story
                image = ""
                profileSrc=""
                title = "Saket Mehta"
            />
            <Story
                image=""
                profileSrc=""
                title="Anish Mehta"
            />
            <Story
                image=""
                profileSrc=""
                title="Kumar Kshitij"
            />
            <Story
                image=""
                profileSrc=""
                title="Shubham kumar"
            />
        </div>
    )
}

export default StoryReel;
