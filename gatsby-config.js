module.exports = {
    siteMetadata: {
        title: `SMIT.19`,
        description: `A simple starter to get up and developing quickly with Gatsby.`,
        author: `smit`,
        menuLinks: [
            {
                name: "Blogs",
                link: "/bloglist"
            },
            // {
            // 	name: "Page2",
            // 	link: "/page-2"
            // },
            {
                name: "About",
                link: "/about"
            }
        ]
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `imsmit - made with Gatsby.js`,
                short_name: `imsmit`,
                start_url: `/`,
                background_color: `#ffc107`,
                theme_color: `#ffc107`,
                display: `standalone`,
                icon: `src/images/superman.png` // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `9mo5kzws8c9t`,
                accessToken: `e6e625df6391539b2aaff09ae7a2dcd670bfd1dfb75e5eeeb24291d7f0a9df99`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [] // just in case those previously mentioned remark plugins sound cool :)
            }
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["Merriweather", "Montserrat:400,800"]
                }
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // "gatsby-plugin-offline"
    ]
};
