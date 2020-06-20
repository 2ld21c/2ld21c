import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import ContentCard from "../components/contentcard";
import PodcastCard from "../components/podcastcard";
import Tags from "../components/tags";
import SEO from "../components/seo";
import "../styles/index.scss";

const Index = ({data}) => { 
    const posts = data.allMarkdownRemark.edges
    
    let articles = [];
    let blog = [];
    let tags = [];

    posts.forEach(post => {
        if (post.node.frontmatter.pagetype === "article" && articles.length < 1) {
            articles.push(post)
        } else {
          if (post.node.frontmatter.pagetype === "blog" && blog.length < 1) {
            blog.push(post)
          }    
        }
        post.node.frontmatter.tags.forEach(tag => {
          tags.push(tag)
        })
    });
    
    return (
        <Layout>
          <SEO title="Home" keywords={[`geopolitics`, `philosophy`, `psychology`, `sociology`]} />
            <div className="main">
                <div className="main-body">
                    <div className="main-body-card">
                        <h1>The Blog</h1>
                        <ContentCard content={articles}/>
                    </div>
                    <div className="main-body-card">
                        <h1>The Book</h1>
                        <ContentCard content={blog} />
                    </div>
                    <div className="main-body-card">
                        <h1>The Podcast</h1>
                        <PodcastCard />
                    </div>
                </div>
                <Tags tags={tags} />
                <Footer />
            </div>
        </Layout>   
    )
}

export default Index

export const pageQuery = graphql`
query indexQuery {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        html 
        excerpt(pruneLength: 720)
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
 