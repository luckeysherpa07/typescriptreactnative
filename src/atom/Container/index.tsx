import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1
  backgroundColor: red
`

interface ContainerProps {
  children?: ReactNode;
}

const ContainerComponent: React.SFC<ContainerProps> = ({children}) => (
  <Container>
    {children}
  </Container>
)

export default ContainerComponent
