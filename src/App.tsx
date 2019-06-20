import * as React from 'react';
import { Text } from 'react-native';
import Container from './atom/Container'
import PageContainer from './pages';

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'One' },
      { key: 'second', title: 'Two' },
    ],
  };

  changeTabIndex = (index: number) => {
    this.setState({ index })
  }

  render() {
    return (
      <Container>
          <Text>LUckey</Text>
          <PageContainer state={this.state} changeTabIndex={this.changeTabIndex} />
      </Container>
    );
  }
}