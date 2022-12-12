/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Carl-Martens.com`,
    siteUrl: `https://carl-martens.com`
  },
  plugins: [
    "gatsby-plugin-cname",
    "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-11631620-1"
    }
  }, "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: "gatsby-omni-font-loader",
    options: {
      enableListener: true,
      preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
      web: [
        {
          name: "Outfit",
          file: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
        }
      ],
    }
  }]
};
