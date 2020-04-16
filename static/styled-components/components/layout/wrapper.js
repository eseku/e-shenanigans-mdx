import styled from 'styled-components'
export default styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.textColor};
`
