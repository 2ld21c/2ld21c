module.exports = {
  siteMetadata: {
    title: "To Live and Die in the 21st Century",
    description: "Philosophy, psychology, sociology, geopolitics,... what it means to be human in the 21st century.",
    author: `Will Jay`,
    url: "https://2ld21c.netlify.app",
    image: "/2ld21c_pod200.jpg"
  },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `articles`,
            path: `${__dirname}/articles`
          }
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `blog`,
            path: `${__dirname}/blog`
          }
        },
        `gatsby-transformer-remark`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images/`
          }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `Special Elite`,
                `Lusitana`,
                `Raleway`,
                `Rubik`,
                `Orbitron`,
                `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
              ],
              display: 'swap'
            }
        }
    ]
}