import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '3rem',
        width: '100%',
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
