import React from "react";
import Tag from "./tag";
import "../styles/tags.scss";

const Tags = ({tags}) => {

    let tagIndex = [];

    tags.forEach(tag => {
        if (!tagIndex.includes(tag)) {
            tagIndex.push(tag)
        }
    });

    const tagCounts = tagIndex.map(tag => {
        let count = 0;
        tags.forEach(item => {
            if (tag === item) {
                count = count + 1;
            }
        });
        return {tag:tag, count: count}
    });
    
    return (
        <div className="tags">
            <h4>Topics</h4>
            <div className="tags-wrap">
                {tagCounts.map((tag, i) => {
                    return <Tag key={i} tag={tag.tag} count={tag.count} />
                })}
            </div>
            
        </div>
    );
}

export default Tags;