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
                plugins: [
                    'gatsby-remark-prismjs',
                ],
            }
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-25946924-1',
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Mikey Gee',
                short_name: 'MG',
                start_url: '/',
                background_color: '#292929',
                theme_color: '#f92672',
                display: 'standalone',
                icon: 'src/images/MG.png',
            }
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-catch-links',
    ],
}
