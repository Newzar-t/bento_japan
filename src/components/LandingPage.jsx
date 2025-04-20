import Banner from "../assets/tolkyobannerpink.svg"
import {useState} from "react";



function StartButton({ onClick }) {
    const buttonStyle = {
        width: "6rem",
        backgroundColor: "#1b1b1b",
        fontSize: "1.5rem",
        padding: "0.5rem 0.3rem",
        border: "none",
        borderRadius: "15px",
        transition: "transform 0.3s ease-in-out",
    };

    const handleMouseEnter = (event) => {
        event.target.style.transform = "scale(1.1)";
    };

    const handleMouseLeave = (event) => {
        event.target.style.transform = "scale(1)";
    };

    return (
        <button
            className="start-button"
            onClick={onClick}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Start
        </button>
    );
}

function LandingPage({ onClickAction }) {
    const bannerStyle = {
        width: "100%",
        height: "auto",
    };

    const handleClick = () => {
        onClickAction(); 
        
        document.querySelector(".landing-page").style.animation =
            "landingPageClosing 2.4s forwards ease-in-out";
    };

    return (
        <div className="landing-page">
            <h1>Bento!!</h1>
            <h2>A simple guide to discover Tokyo and more !</h2>
            <StartButton onClick={handleClick} />
            <img style={bannerStyle} src={Banner} alt="bannerTokyo" />
        </div>
    );
}

export default LandingPage;