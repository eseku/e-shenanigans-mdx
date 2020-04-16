import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <div style={{ marginTop: '5rem' }}>
          <Img fluid={data.doodle.childImageSharp.fluid} />
        </div>
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'raleway',
            fontSize: '18px',
            marginTop: '5rem',
          }}
        >
          Hallo! Ich bin
          <span>
            <h1 style={{ marginTop: 0, color: '#4a90e2' }}>Eustace</h1>
          </span>{' '}
          ein leidenschaftlicher Softwareentwickler. Hier finden sie meine
          schriften 😊
        </p>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    doodle: file(absolutePath: { regex: "/GroovyDoodle.png/" }) {
      id
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
