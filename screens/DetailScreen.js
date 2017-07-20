import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DetailScreen extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('this.props', this.props)
    console.log('nextProps', nextProps)
  }

  render() {


    console.log(this.props, "paassssing props");
    return(
      <View>
        <Text> still herearerea</Text>
      </View>
    )
  }

}

export default DetailScreen
