import React from 'react'
import Footer from './Footer'
import {
  RootPageWrapper,
  RootPageLeft,
  RootPageRight,
  ArticleHeader,
} from '../../static/styled-components/components/header'
import {
  Wrapper,
  Content,
} from '../../static/styled-components/components/layout'
import '../utils/index.css'
import ThemeToggler from './ThemeToggler'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <RootPageWrapper>
          <RootPageLeft.HomeLink to={`/`}>
            <RootPageLeft.Header>{title}</RootPageLeft.Header>
          </RootPageLeft.HomeLink>
          <ThemeToggler />
          <RootPageRight.HomeLink to={'/blog'}>
            <RootPageRight.Header>blog</RootPageRight.Header>
          </RootPageRight.HomeLink>
        </RootPageWrapper>
      )
    } else {
      header = (
        <div>
          <ArticleHeader.Link to="/blog">
            <ArticleHeader.Header>blog</ArticleHeader.Header>
          </ArticleHeader.Link>
        </div>
      )
    }
    return (
      <Wrapper>
        <Content>
          {header}
          {children}
        </Content>
        {location.pathname !== rootPath && <Footer />}
      </Wrapper>
    )
  }
}

export default Layout
