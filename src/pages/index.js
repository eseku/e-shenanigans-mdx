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
    console.log(data, 'data')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Img fluid={data.doodle.childImageSharp.fluid} />
        <p>
          Hi! I'm Eustace, a passionate software engineer. This is where to find
          my writings, if you need them
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
          ...GatsbyImageSharpFluid_tracedSVG
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
