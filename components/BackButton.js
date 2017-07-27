import React from 'react';
import { TouchableHighlight, Text } from 'react-native'

export default function (props) {

  onBackPress = () => {
    props.navigation.navigate(props.destination);
  }

  return(
    <TouchableHighlight onPress={this.onBackPress}>
      <Text>
         back
      </Text>
    </TouchableHighlight>
  )

}
