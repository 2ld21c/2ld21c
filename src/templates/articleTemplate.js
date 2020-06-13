import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import "../styles/article.scss";

const Article = ({data}) => {
    const post = data.markdownRemark;
    console.log(post)
    const [darkMode, setDarkMode] = useState(getInitialMode());
    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode))
    }, [darkMode])

    function getInitialMode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const userPrefersDark = getPrefColorScheme();
        // if mode was saved -> dark / light
        if (isReturningUser) {
            return savedMode;
            // if preferred color scheme is dark -> dark
        } else if (userPrefersDark) {
            return true;
            // otherwise -> light
        } else {
            return false;
        }  
    }

    function getPrefColorScheme() {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return (
        <Layout>
            <div className={`article ${darkMode ? `dark-mode` : ``}`}>
                <div className="article-main">
                    <div className="article-main-toggle">
                        <span style={{ color: darkMode ? "grey" : "orange"}}>☀</span>
                        <span className="article-main-toggle-switch">
                            <input
                                checked={darkMode}
                                onChange={() => setDarkMode(prevMode => !prevMode)}
                                id="checkbox"
                                className="checkbox" 
                                type="checkbox"
                            />
                            <label htmlFor="checkbox" />
                        </span>
                        <span style={{ color: darkMode ? "orange" : "gray"}}>☽</span>
                    </div>
                    <h1>{post.frontmatter.title}</h1>
                    <small>{post.frontmatter.date}</small>
                    <hr/>
                    <div className="article-main-body" dangerouslySetInnerHTML={{__html: post.html}} />
                </div>
                <Footer />
            </div>
        </Layout>
    );
}

export default Article;

export const pageQuery = graphql`
query articleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html 
        frontmatter {
            title 
            date(formatString: "MMMM DD, YYYY") 
            tags 
        }
    }
}
`