import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import './layout.css'
import { mainTheme } from '../styles'

import smallFavicon from '../images/small-favicon.png'
import medFavicon from '../images/med-favicon.png'
import largeFavicon from '../images/large-favicon.png'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            url
            image
            twitterUsername
            keywords
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          title: defaultTitle,
          description: defaultDescription,
          url: siteUrl,
          image: defaultImage,
          twitterUsername,
          keywords,
        },
      },
    }) => (
      <>
        <Helmet
          title={defaultTitle}
          meta={[
            { name: 'description', content: defaultDescription },
            { name: 'image', content: defaultImage },
            { name: 'url', content: siteUrl },
            { name: 'keywords', content: keywords },
            { name: 'twitter:creator', content: twitterUsername },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: defaultTitle },
            { name: 'twitter:description', content: defaultDescription },
            { name: 'twitter:image', content: defaultImage },
          ]}
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: `${smallFavicon}`,
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: `${medFavicon}`,
            },
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${largeFavicon}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <ThemeProvider theme={mainTheme}>
            <>{children}</>
          </ThemeProvider>
        </div>
      </>
    )}
  />
)

export default Layout
