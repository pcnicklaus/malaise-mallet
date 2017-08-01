import React from 'react';
import { TouchableHighlight, Text } from 'react-native'

export default function (props) {

  onBackPress = () => {
    props.navigation.navigate(props.destination);
  }

  return(
    <TouchableHighlight style={ styles.container } onPress={this.onBackPress}>
      <Text style={ styles.button }>
         back
      </Text>
    </TouchableHighlight>
  )

}

const styles = {
  container: {
    paddingBottom: 5,
    paddingLeft: 5
  },
  button: {
    paddingBottom: 5,
    // backgroundColor: '#ff0000'
    color: '#007AFF',
    textAlign: 'left',
    fontSize: 18,
  }
}
//
// // needs to be put into the component
// backButton: {
//   height: 30,
//   width: 60,
//   // backgroundColor: '#48BBEC',
//   // borderColor: '#48BBEC',
//   // borderWidth: 1,
//   // borderRadius: 8,
//   // marginBottom: 2,
//   justifyContent: 'center',
//   flexDirection: 'column',
//   margin: 10,
//   fontSize: 15,
//   textAlign: 'left'
// }
