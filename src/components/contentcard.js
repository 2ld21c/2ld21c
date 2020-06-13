import React from "react";
import { Link } from "gatsby";
import "../styles/contentcard.scss";

const ContentCard = ({content}) => {
    console.log(content)
    return (
        <div className="contentcard">
            <h2>The Latest</h2>
            {content.map((post, i) => {
                return (
                    <div key={i} className="contentcard-post">
                        <Link className="contentcard-post-link" to={post.node.fields.slug}><h3>{post.node.frontmatter.title}</h3></Link>
                        <small>{post.node.frontmatter.date}</small>
                        <hr />
                        <p>{post.node.excerpt}</p>
                    </div>
                    
                )
            })}
        </div>
    );
}

export default ContentCard;
