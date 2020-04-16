import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const ThemeChanger = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext)

  return <Icon theme={currentTheme.name} toggleTheme={toggleTheme} />
}

const StyledToggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  padding: 0 0;
`

const StyledIcon = styled.i`
  svg {
    stroke: hsl(36, 77%, 49%);
    color: black;
    @media (max-width: 750px) {
      &:active,
      &:focus {
        outline: 0;
        border: none;
      }
    }
  }
`

export default ThemeChanger

function Icon({ theme, toggleTheme }) {
  return (
    <StyledToggler
      onClick={() => {
        toggleTheme()
      }}
    >
      {theme === 'light' ? (
        <StyledIcon>
          <svg
            data-v-adffe394=""
            tabIndex="0"
            role="radio"
            aria-checked="false"
            aria-label="Switch to night mode"
            data-theme-id="dark-theme"
            width="20"
            height="20"
            fill={'hsl(36, 77%, 49%)'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-adffe394=""
              stroke="none"
              d="M13.2 8.01a6.409 6.409 0 0 1-1.554.194c-3.235 0-5.823-2.577-5.823-5.797 0-.515.065-1.03.194-1.546.065-.193 0-.45-.194-.644C5.63.024 5.435-.04 5.176.024 2.136.926 0 3.76 0 6.915 0 10.845 3.17 14 7.117 14c3.17 0 6.018-2.125 6.859-5.217.064-.193 0-.45-.194-.644-.13-.129-.389-.193-.583-.129z"
            />
          </svg>
        </StyledIcon>
      ) : (
        <StyledIcon>
          <svg
            data-v-adffe394=""
            tabIndex="0"
            role="radio"
            aria-checked="true"
            data-theme-id="light-theme"
            aria-label="Switch to day mode"
            width="20"
            height="20"
            fill=" hsl(36, 77%, 49%)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-adffe394=""
              d="M1 9h.727M3.327 3.327l.51.51M9 1v.727M14.673 3.327l-.51.51M17 9h-.727M14.673 14.673l-.51-.51M9 17v-.727M3.327 14.673l.51-.51"
              strokeWidth="1.555"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              data-v-adffe394=""
              d="M9 13.364a4.364 4.364 0 1 0 0-8.727 4.364 4.364 0 0 0 0 8.727z"
            />
          </svg>
        </StyledIcon>
      )}
    </StyledToggler>
  )
}
