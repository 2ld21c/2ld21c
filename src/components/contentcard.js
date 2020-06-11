import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/contentcard.scss";

const ContentCard = ({content}) => {

    return (
        <div className="contentcard">
            <h2>The Latest</h2>
            {content.map((post, i) => {
                return (
                    <div key={i} className="contentcard-post">
                        <h3>{post.node.frontmatter.title}</h3>
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
