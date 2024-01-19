import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { FaPlay } from 'react-icons/fa';

function HeroSection() {
    return (
        <div className = "hero-container">
            <video src = '/videos/video-1.mp4' autoPlay loop muted />
            <h1>SyncConnect Hub</h1>
            <p>What are you waiting for?</p>
            <div className = 'hero-btns'>
                <Link to = "/list">
                    <button className = "btna" >GET STARTED</button>
                </Link>
                <button className = "btna">
                    WATCH TRAILER
                    <FaPlay className='play' />
                </button>
            </div>
        </div>
    );
}

export default HeroSection;