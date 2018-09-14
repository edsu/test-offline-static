module.exports = {
  siteMetadata: {
    title: 'Gatsby',
  },
  plugins: [
		{
      resolve: `gatsby-plugin-offline`,
      options: {
        // navigateFallbackWhitelist: [/^[^?]*([^.?]{5}|\.html|\.jpg)/],
        globPatterns: ['**/*.{js,jpg,html,css}']
      },
    },
  ],
}
