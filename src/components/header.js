import React from "react";
import { Link } from "gatsby";
import "../styles/header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-content-title">
                    <Link to="/" className="header-content-links-link"><h1>To Live & Die in the 21st Century</h1></Link>
                </div>
                <div className="header-content-links">
                    <Link 
                        className="header-content-links-link" 
                        to="/"><h3>Home</h3></Link>
                    <Link 
                        className="header-content-links-link" 
                        to="/about"><h3>About</h3></Link>
                    <Link 
                    className="header-content-links-link" 
                    to="/archives"><h3>Archives</h3></Link>

                </div>
            </div>
            <div className="header-under">
                <Link 
                    className="header-under-link" 
                    to="/"><h3>Home</h3></Link>
                <Link 
                    className="header-under-link" 
                    to="/about"><h3>About</h3></Link>
                <Link 
                    className="header-under-link" 
                    to="/archives"><h3>Archives</h3></Link>
            </div>
        </div>
    )
}

export default Header