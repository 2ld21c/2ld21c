import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import PostTag from "../components/posttag";
import SEO from "../components/seo";
import "../styles/archives.scss";

const Archives = ({data}) => {
    const posts = data.allMarkdownRemark.edges;
    console.log(data);
    const { totalCount } = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"}`;

    const currentPage = 1
    const postsPerPage = 3 // see limit in graphql query below
    const nextPage = `archives/${currentPage + 1}`
    const hasNextPage = data.allMarkdownRemark.totalCount > postsPerPage

    return (
        <Layout>
          <SEO title="Archives" keywords={[`2ld21c`, `the condemnation game`, `geopolitics`, `philosophy`, `psychology`]} />
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
                  <div className="archives-body-pagination">
                  {hasNextPage &&
                    <div>
                      <Link to={nextPage} rel="next" style={{ textDecoration: `none` }}>
                        <span className="archives-body-pagination-link">Next Page →</span>
                      </Link>
                    </div>
                  }
                  </div>
                </div>
                <Footer />
            </div>
        </Layout>
    );
}

export default Archives;

export const pageQuery = graphql`
query archivesQuery {
  allMarkdownRemark(limit: 3 sort: { fields: [frontmatter___date], order: DESC}) {
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