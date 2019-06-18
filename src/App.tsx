import * as React from 'react';
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
      // <TabView
      //   navigationState={this.state}
      //   renderScene={SceneMap({
      //     first: FirstRoute,
      //     second: SecondRoute,
      //   })}
      //   onIndexChange={index => this.setState({ index })}
      //   initialLayout={{ width: Dimensions.get('window').width }}
      //   renderTabBar={renderNewTab}
      // />
      <PageContainer state={this.state} changeTabIndex={this.changeTabIndex} />
    );
  }
}
