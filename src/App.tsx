import * as React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { TabView, SceneMap, SceneRendererProps, NavigationState, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const renderNewTab = (props: SceneRendererProps & {
  navigationState: NavigationState<{
    key: string;
    title: string;
  }>;
}) => <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabView}
    labelStyle={styles.label}
  />

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'One' },
      { key: 'second', title: 'Two' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={renderNewTab}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scene: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabView: {
    backgroundColor: 'white',
    elevation: 0
  },
  label: {
    color: 'black',
    // fontSize: Platform.OS === 'android' ? 14 : 18,
    fontWeight: '100',
  },
  indicator: {
    display: 'flex',
    backgroundColor: 'black',
    height: 3,
  }
});
