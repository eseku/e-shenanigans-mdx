import React from 'react'

const Footer = props => {
  return (
    <div>
      <footer
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '3rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        © {new Date().getFullYear()}, Made With ❤ by Joojo Quartey
      </footer>
    </div>
  )
}

export default Footer
