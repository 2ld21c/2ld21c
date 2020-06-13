import React from "react";
import { Link } from "gatsby";
import "../styles/tag.scss";

const Tag = ({tag, count}) => {
    console.log(tag)
    return (
        <div className="tag">
            <Link to={`/tags/${tag}/`}>
                <button>{tag} <small>{count}</small> </button>
            </Link>
        </div>
    );
}

export default Tag;