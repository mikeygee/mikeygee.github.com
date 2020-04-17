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

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src\\/posts/" }}) {
                edges {
                    node {
                        fileAbsolutePath
                    }
                }
            }
        }
    `);
    // console.log('result', JSON.stringify(result, null, 4));
}