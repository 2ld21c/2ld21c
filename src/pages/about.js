import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import "../styles/about.scss";

const About = () => {
    return (
        <Layout>
            <div className="about">
                <div className="about-body">
                    <h1>About 2LD21C</h1>
                    <p>Gears turning and smoke billowing, the great machine of history has come back online. Every ideology, grist for the mill... Every punch, thrown in vain... We're twenty years into the 21st century, and most of us aren't making it out of it alive.</p>
                </div>
                <Footer />

            </div>
        </Layout>
        
    );
}

export default About;