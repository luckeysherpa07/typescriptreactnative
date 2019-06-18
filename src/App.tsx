import * as React from 'react';
import { ReactNode } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { TabView, SceneMap, SceneRendererProps, TabBar } from 'react-native-tab-view';

export type Key = { key: string }

export type RouteBase = Key & { testID?: string }

export type NavigationState<T extends Key> = {
  index: number
  routes: T[]
}

export type PagerProps = {
  animationEnabled?: boolean
  swipeEnabled?: boolean
  swipeDistanceThreshold?: number
  swipeVelocityThreshold?: number
  children?: ReactNode
}

export type Layout = {
  height: number
  width: number
}

export type SceneRendererProps<T extends RouteBase = RouteBase> = {
  layout: Layout & {
    measured: boolean
  }
  navigationState: NavigationState<T>
}

export type TabViewProps<
  T extends RouteBase = RouteBase
  > = PagerProps & {
    navigationState: NavigationState<T>
    tabBarPosition?: 'bottom' | 'top'
    renderTabBar?: (props: SceneRendererProps) => ReactNode
  }

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

export default class App extends React.Component<TabViewProps> {
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
