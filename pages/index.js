import styled from 'styled-components'

const StyledElement = styled.h1`
  color: red;
`

export default class Home extends React.Component {
    render() {
      return <StyledElement>Page server</StyledElement>
    }
}
