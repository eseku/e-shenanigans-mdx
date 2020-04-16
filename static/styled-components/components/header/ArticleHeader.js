import styled from 'styled-components'
import { rhythm } from '../../../../src/utils/typography'
import { Link } from 'gatsby'

export default {
  Header: styled.h3`
    font-family: Montserrat, sans-serif;
    margin-top: 1rem;
    margin-bottom: ${rhythm(-1)};
    color: ${props => props.theme.currentTheme.colors.highlightColor};
  `,
  Link: styled(Link)`
    box-shadow: none,
    text-decoration: none,
    color: ${props => props.theme.currentTheme.colors.highlightColor}
  `,
}
