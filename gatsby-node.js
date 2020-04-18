exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const fileName = node.fileAbsolutePath.match(/\/([^/]+)\.md$/);
        if (fileName) {
            const parts = fileName[1].split('-');
            const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
            const slug = `/blog/${parts[3]}`;
            createNodeField({
                node,
                name: 'longDate',
                value: new Intl.DateTimeFormat('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                }).format(date)
            });
            createNodeField({
                node,
                name: 'shortDate',
                value: new Intl.DateTimeFormat('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                }).format(date)
            });
            createNodeField({
                node,
                name: 'slug',
                value: slug,
            });
        }
    }
}

const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src\\/posts/" }}) {
                edges {
                    node {
                        id
                        fields {
                            longDate
                            slug
                        }
                        frontmatter {
                            title
                        }
                        html
                        timeToRead
                    }
                }
            }
        }
    `);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/BlogPost.js'),
            context: {
                id: node.id
            }
        });
    });
}