module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
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