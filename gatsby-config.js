module.exports = {
    siteMetadata: {
        title: 'Mikey Gee | Software Engineer',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                excerpt_separator: '<!--break-->',
            }
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-catch-links',
    ],
}
