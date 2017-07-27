import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';
import * as actions from '../actions';

import Styles from '../styles';

const SLIDE_DATA = [
  // { text: 'Welcome to Malaise Mallet', color: '#03A9F4' },
  // { text: 'Helping people kick apathy in the face!', color: '#009688' },
  { text: 'Ready to give it a shot?', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.props.navigation.navigate('deck');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('deck');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default connect(null, actions)(WelcomeScreen);
