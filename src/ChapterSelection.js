import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom' ;
import './ChapterSelection.css'; // Import the CSS file for styling

function ChapterSelection() {
    const [chapters, setChapters] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('/jsondynamic/preview.json')
            .then(response => {
                setChapters(response.data);
            })
            .catch(error => {
                console.error("Error loading chapters:", error);
            });
    }, []);

    const handleChapterClick = (chapter) => {
        // Redirect to another page with chapter details
        navigate(`/chapter${chapter.id}/`);
    };

    return (
        <div className="chapter-selection">
            <h1>Select a Chapter</h1>
            <div className="chapter-list">
                {chapters.map((chapter) => (
                    chapter.id !== 0 ? ( // Only display chapters with id != 0
                        <div
                            key={chapter.id}
                            className="chapter-preview"
                            onClick={() => handleChapterClick(chapter)}
                            style={{ backgroundImage: `url(${chapter.background})` }} // Set background image from JSON
                        >
                            <h2>{chapter.name}</h2>
                            {/* Display the description on hover */}
                            <div className="chapter-description">{chapter.details}</div>
                        </div>
                    ) : (
                        <p key="placeholder"></p>
                    )
                ))}
            </div>
        </div>
    );
}

export default ChapterSelection;
