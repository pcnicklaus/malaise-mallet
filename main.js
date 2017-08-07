import Expo, { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import registerForNotifications from './services/push_notifications';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DetailScreen from './screens/DetailScreen';
import DeckScreen from './screens/DeckScreen';
import MalletsScreen from './screens/MalletsScreen';
import ReviewForm from './screens/ReviewForm';
import MalletForm from './screens/MalletForm';

class App extends React.Component {

  componentDidMount() {

    registerForNotifications();
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;

      if (origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'Ok.' }]
        );
      }
    });
  }


  render() {

    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          deck: { screen: DeckScreen },
          mallets: { screen: MalletsScreen },
        })
      },
      detail: { screen: DetailScreen },
      review: { screen: ReviewForm },
      new: { screen: MalletForm }
    },
    {
      navigationOptions: {
        tabBar: { visible: false }
      },
      lazyLoad: true
    });

    return (
      <Provider store={store}>
        <MainNavigator styles={ styles.container }/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);






// const ReviewNav = StackNavigator({
//     review: { screen: ReviewScreen },
//     detail: {
//         screen: DetailScreen,
//         navigationOptions: ({ navigation }) => ({
//              title: 'Detail',
//              tabBarVisible: false,
//         )}
//     },
//     settings: { screen: SettingsScreen },
// })

// {
//   screen: StackNavigator({
//     review: { screen: ReviewScreen },
//     settings: { screen: SettingsScreen }
//   })
// }

// const MainNavigator = TabNavigator({
//   welcome: { screen: WelcomeScreen },
//   auth: { screen: AuthScreen },
//   main: {
//     screen: TabNavigator({
//       map: { screen: MapScreen },
//       deck: { screen: DeckScreen },
//       review: {
//         screen: StackNavigator({
//           review: { screen: ReviewScreen },
//           settings: { screen: SettingsScreen }
//         })
//       }
//     }, {
//       tabBarPosition: 'bottom',
//       tabBarOptions: {
//         labelStyle: { fontSize: 12 }
//       }
//     })
//   }
// }, {
//   navigationOptions: {
//     tabBar: { visible: false }
//   },
//   lazyLoad: true
// });
//
//
// const MainNavigator = TabNavigator({
//   welcome: { screen: WelcomeScreen },
//   deck: { screen: DeckScreen },
//   auth: { screen: AuthScreen },
//   main: {
//     screen: TabNavigator({
//       map: { screen: MapScreen },
//       // deck: { screen: DeckScreen },
//       review: {
//         screen: StackNavigator({
//           review: { screen: ReviewScreen },
//           settings: { screen: SettingsScreen }
//         })
//       }
//     }, {
//       tabBarPosition: 'bottom',
//       tabBarOptions: {
//         labelStyle: { fontSize: 12 }
//       }
//     })
//   }
// }, {
//   navigationOptions: {
//     tabBar: { visible: false }
//   },
//   lazyLoad: true
// });
