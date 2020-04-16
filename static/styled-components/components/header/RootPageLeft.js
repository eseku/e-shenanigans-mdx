import styled from 'styled-components'
import { Link } from 'gatsby'
export default {
  HomeLink: styled(Link)`
    box-shadow: none,
    text-decoration: none,
    color: ${props => props.theme.colors.textColor}
  `,
  Header: styled.h1`
    color: ${props => props.theme.colors.textColor};
  `,
}
