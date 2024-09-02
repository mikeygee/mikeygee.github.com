/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mikey Gee | Software Engineer`,
    siteUrl: `https://mikeygee.com`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      "trackingIds": [
        "G-W1NWZF5SJ4"
      ]
    }
  }, {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Mikey Gee",
      short_name: "MG",
      start_url: "/",
      background_color: "#292929",
      theme_color: "#f92672",
      display: "standalone",
      icon: "src/images/MG.png"
    }
  }]
};