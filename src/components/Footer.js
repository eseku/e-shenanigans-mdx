import React from 'react'

const Footer = props => {
  return (
    <div>
      <footer
        style={{
          backgroundColor: 'black',
          color: '#f4f6fa',
          padding: '3rem',
          width: '100vw !important',
          display: 'flex',
          justifyContent: 'center',
          margin: 0,
          position: 'sticky',
        }}
      >
        © {new Date().getFullYear()}, Made With ❤ by Joojo Quartey
      </footer>
    </div>
  )
}

export default Footer
