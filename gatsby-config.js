module.exports = {
  siteMetadata: {
    title: 'Terminal Website',
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'resume',
        link: '/resume',
      },
      {
        name: 'projects',
        link: '/projects',
      },
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'projects',
        link: '/projects',
      },
    ],
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
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
