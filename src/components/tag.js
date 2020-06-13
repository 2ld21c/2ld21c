import React from "react";
import { Link } from "gatsby";
import "../styles/tag.scss";

const Tag = ({tag, count}) => {
    return (
        <div className="tag">
            <Link to={`/tags/${tag.toLowerCase()}/`}>
                <button>{tag} <small>{count}</small> </button>
            </Link>
        </div>
    );
}

export default Tag;