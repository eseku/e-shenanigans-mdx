import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const Blockquote = props => {
  const { currentTheme } = useContext(ThemeContext)
  console.log(currentTheme)

  return (
    <p
      style={{
        position: 'relative',
        color: currentTheme.colors.highlightColor,
        borderLeft: `0.3em solid ${currentTheme.colors.highlightColor}`,
        paddingLeft: '1em',
        fontFamily: 'Graphik',
        fontSize: '2em',
        lineHeight: '1.2em',
        margin: '1em 0',
      }}
    >
      {props.children}
    </p>
  )
}

export default Blockquote
