import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Footer from './Footer'
import { rhythm, scale } from '../utils/typography'
import '../utils/index.css'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0rem 1rem',
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <div style={{}}>
            <h1>
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {title}
              </Link>
            </h1>
          </div>
          <div style={{}}>
            <h3 style={{}}>
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/blog`}
              >
                Blog
              </Link>
            </h3>
          </div>
        </div>
      )
    } else {
      header = (
        <div>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
              marginBottom: rhythm(-1),
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        </div>
      )
    }
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          flex: 1,
        }}
      >
        <div
          style={{
            flexGrow: 1,
            maxWidth: rhythm(50),
            margin: '0 auto',
            padding: `${rhythm(0.2)} ${rhythm(3 / 4)}`,
            // border: `1px solid black`,
          }}
        >
          {header}
          {children}
        </div>

        <Footer />
      </div>
    )
  }
}

export default Layout
