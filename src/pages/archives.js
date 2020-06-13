import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PostTag from "../components/posttag";
import "../styles/archives.scss";

const Archives = ({data}) => {
    const posts = data.allMarkdownRemark.edges;
    console.log(posts);
    const { totalCount } = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"}`;

    return (
        <Layout>
            <div className="archives">
                <div className="archives-body">
                <i><h2>{tagHeader}</h2></i>
                {posts.map((post, i) => {
                    const tags = post.node.frontmatter.tags;
                    return (
                        <div className="archives-body-post" key={i}>
                            <Link className="archives-body-post-link"
                                to={post.node.fields.slug}
                            ><h2>{post.node.frontmatter.title}</h2>
                            </Link>
                            <small className="archives-body-post-date">Posted on {post.node.frontmatter.date}</small>
                            <hr className="archives-body-post-under"/>
                            <p>{post.node.excerpt}</p>
                            <Link className="archives-body-post-link"
                                to={post.node.fields.slug}
                            ><small> Read full post</small>
                            </Link>
                            <hr/>
                            <div className="archives-body-post-tag-wrap">
                                {tags.map((tag, i) => {
                                    return <PostTag key={i} tag={tag}/>
                                })}
                            </div>
                        </div>
                    )
                })}
                </div>
            
            </div>
        </Layout>
    );
}

export default Archives;

export const pageQuery = graphql`
query archivesQuery {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        html 
        excerpt(pruneLength: 400)
        frontmatter {
          title 
          date 
          tags
          pagetype
        }
        fields {
          slug
        }
      }
    }
  }
}
` 