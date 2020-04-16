import React from 'react'
import { graphql } from 'gatsby'
import { Image, Layout, SEO } from '../components'
import {
  IndexImageContainer,
  IndexParagraph,
  IndexSpan,
} from '../../static/styled-components/components/index'

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

        <IndexImageContainer>
          <Image imageName="groovydoodle" />
        </IndexImageContainer>

        <IndexParagraph>
          Hallo! Ich bin
          <span>
            <IndexSpan>Eustace</IndexSpan>
          </span>
          ein leidenschaftlicher Softwareentwickler. Hier finden sie meine
          schriften 😊
        </IndexParagraph>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
