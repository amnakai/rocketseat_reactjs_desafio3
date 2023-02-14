import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;

  background: ${(props) => props.theme['base_background']};
  
  display: flex;
  flex-direction: column;
`