const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const articleTemplate = path.resolve(`./src/templates/articleTemplate.js`);
    const blogTemplate = path.resolve(`./src/templates/blogTemplate.js`);
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                pagetype
                
              }
            }
          }
        }
      }
    `)
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.pagetype === 'article') {
        createPage({
          path: node.fields.slug,
          component: articleTemplate,
          context: {
            slug: node.fields.slug
          }
        });
      } else { 
        createPage({
          path: node.fields.slug,
          component: blogTemplate,
          context: {
            slug: node.fields.slug 
          }
        });
      }
    })
  }