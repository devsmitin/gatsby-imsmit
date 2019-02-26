module.exports = {
	siteMetadata: {
		title: `SMIT.19`,
		description: `Blog built with Gatsby and Contentful.`,
		author: `smit`,
		menuLinks: [
			{
				name: "Blogs",
				link: "/blogs"
			},
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
				name: `SMIT.19 - Personal blog`,
				short_name: `SMIT.19`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
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
					families: ["Merriweather:700", "Montserrat:400,800"]
				}
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// "gatsby-plugin-offline"
	]
};
