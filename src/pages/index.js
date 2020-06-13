import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import ContentCard from "../components/contentcard";
import "../styles/index.scss";

const Index = ({data}) => { 
    const posts = data.allMarkdownRemark.edges 
    let articles = [];
    let blog = [];

    posts.forEach(post => {
        if (post.node.frontmatter.pagetype === "article" && articles.length < 1) {
            articles.push(post)
        } else {
          if (post.node.frontmatter.pagetype === "blog" && blog.length < 1) {
            blog.push(post)
          }
            
        }
    });
    //console.log(articles)
    return (
        <Layout>
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
                        <ContentCard content={blog} />
                    </div>
                </div>
                <div style={{color: "white", textAlign: "center"}}>The contacts</div>
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
        excerpt(pruneLength: 700)
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
 