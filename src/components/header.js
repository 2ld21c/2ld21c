import React from "react";
import { Link } from "gatsby";
import "../styles/header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-content-title">
                    <Link to="/" className="header-content-links-link"><h1>To Live and Die in the 21st Century</h1></Link>
                </div>
                <div className="header-content-links">
                    <Link 
                        className="header-content-links-link" 
                        to="/articles"><h3>About 2LD21C</h3></Link>
                    <Link 
                    className="header-content-links-link" 
                    to="condemnation-game"><h3>About The Condemnation Game</h3></Link>

                </div>
            </div>
            <div className="header-under">
                <Link 
                    className="header-under-link" 
                    to="/articles"><h3>About 2LD21C</h3></Link>
                <Link 
                    className="header-under-link" 
                    to="condemnation-game"><h3>About The Condemnation Game</h3></Link>
            </div>
        </div>
    )
}

export default Header