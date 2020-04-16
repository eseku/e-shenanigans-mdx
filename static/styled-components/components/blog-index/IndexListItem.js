import styled from 'styled-components'
import { rhythm } from '../../../../src/utils/typography'
import { Link } from 'gatsby'

export default {
  Header: styled.h3`
    margin-bottom: ${rhythm(0.25)};
    color: ${props => props.theme.currentTheme.colors.highlightColor};
  `,
  Link: styled(Link)`
    box-shadow: none;
    text-decoration: none;
  `,
}
