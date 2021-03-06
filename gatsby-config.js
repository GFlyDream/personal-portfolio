require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    title: "Jian Sun",
    description:
      "Frontend developer, marketing & branding manager, and student from beautiful Montreal Canada.",
    url: "https://jiansun.web.app/", // No trailing slash allowed!
    image: "https://cdn.discordapp.com/attachments/863831335827144754/875448829867069470/J.png",
    siteTitleAlt: `Jian Sun`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Frontend developer, marketing & branding manager, and student from beautiful Montreal Canada.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#70f655`,
        display: `standalone`,
        icons: [
          {
            src: `embedpic.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `embedpic.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
