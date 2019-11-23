module.exports = {
  siteMetadata: {
    title: 'Liz Phillips - Full Stack Software Engineer & Code Witch',
    description:
      'Portfolio website for Liz Phillips, full stack software engineer in New York City, NY.',
    url: 'https://www.lizkristinaphillips.com',
    image: '/PreviewIcon.png',
    twitterUsername: '@lizCodes',
    keywords: 'full stack, developer, web, development, new york, nyc',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/PreviewIcon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
