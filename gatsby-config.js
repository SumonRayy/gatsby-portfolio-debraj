require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    title: "Debraj",
    author: "Debraj Roy",
    siteDescription: "I'm A passionate photographer and graphic designer",
    siteUrl: "https://debraj-roy.netlify.com/",
    siteTitleAlt: `Debraj-Roy | My PortFolio Website`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: 'Debraj-Roy',
        socialMedia: [
          {
            title: 'Instagram',
            href: 'https://www.instagram.com/debraj_royy/'
          },
          {
            title: 'Facebook',
            href: 'https://www.facebook.com/DebrajRoy211'
          }
        ],
        showThemeAuthor: false,
        location: 'Asansol, West Bengal, India',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Debraj Roy`,
        short_name: `Debraj-Roy`,
        description: `I'm A passionate photographer and graphic designer.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
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
