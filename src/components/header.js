import React from "react";
import { Link } from "gatsby";
import "../styles/header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <Link to="/" className="header-links-link"><h1>To Live and Die in the 21st Century</h1></Link>
            </div>
            <div className="header-links">
                <Link 
                    className="header-links-link" 
                    to="/articles"><h2>About 2LD21C</h2></Link>
                <Link 
                className="header-links-link" 
                to="condemnation-game"><h2>About The Condemnation Game</h2></Link>

            </div>
        </div>
    )
}

export default Header