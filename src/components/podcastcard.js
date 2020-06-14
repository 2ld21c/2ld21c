import React from "react";
import PodcastLogo from "../images/2ld21c_pod200.jpg";
import "../styles/contentcard.scss";

const PodcastCard = () => {
    return (
        <div className="contentcard">
            <h2>2LD21C Podcast</h2>
            <div className="contentcard-post" style={{textAlign: "center"}}>
                <img src={PodcastLogo} alt=""/>
                <p>Gears turning and smoke billowing, the great machine of history has come back online. Every ideology, grist for the mill... Every punch, thrown in vain... We're twenty years into the 21st century, and most of us aren't making it out of it alive. </p>
            </div>    
        </div>
    );
}

export default PodcastCard;