import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { Image, Layout, SEO } from '../components'
import {
  IndexImageContainer,
  IndexParagraph,
  IndexSpan,
} from '../../static/styled-components/components/index'
import { ThemeContext } from 'styled-components'

function Index(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const { currentTheme } = useContext(ThemeContext)

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <IndexImageContainer>
        <Image imageName={`groovydoodle${currentTheme.name}`} />
      </IndexImageContainer>

      <IndexParagraph>
        Hallo! Ich bin
        <span>
          <IndexSpan>Eustace</IndexSpan>
        </span>
        ein leidenschaftlicher Softwareentwickler. Hier findet euch meine
        schriften 😊
      </IndexParagraph>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
