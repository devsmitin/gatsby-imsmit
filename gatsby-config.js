/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Hello Smit!`,
    description: `Smit Modi, A Front-end Developer & Designer from Ahmedabad, India.`,
    author: `smit`,
    twitterUsername: `@smilingsmit`,
    ogImage: `/static/superman.png`,
    siteURL: `http://devsmit.in/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-137494172-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    // `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Smit\'s - Personal blog`,
        short_name: `Smit\'s`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/superman.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:100,400,700,900`, `Indie Flower`],
        display: "swap",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // "gatsby-plugin-offline"
  ],
}
