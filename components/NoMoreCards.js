import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-material-design';
import { CardMedia } from 'react-native-card-media';
import { Button } from 'react-native-elements';

import { SCREEN_HEIGHT, SCREEN_WIDTH, IMAGE_HEIGHT_3FOURTHS } from '../shared';

export default class NoMoreCards extends Component {

  render() {
    if(!this.props.title) { return }

    return(

        <View style={ styles.scene }>
          <View style={{ backgroundColor: '#F5FCFF' }}>
            <View style={ styles.container }>
              <Card style={ styles.cardStyle }>
                <CardMedia
                  style={{ height: IMAGE_HEIGHT_3FOURTHS }}
                  title={ 'this.props.title' }
                  titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa' }}
                  files={ [`https://blog.vandalog.com/wp-content/uploads/2015/11/al-640x480.jpg`] }
                />
                <Card.Body>
                  <Button
                    title="add a mallet"
                    large
                    icon={{ name: 'plus-one' }}
                    backgroundColor="#03A9F4"
                    onPress={() => this.props.navigation.navigate('new')}
                  />
                </Card.Body>
              </Card>
            </View>
          </View>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  scene: {
    height: SCREEN_HEIGHT,
  },
  cardStyle: {
    width: SCREEN_WIDTH,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});




// <View style={styles.container}>
//   <Card style={styles.cardStyle}>
//     <CardMedia
//       style={{ height: IMAGE_HEIGHT_3FOURTHS }}
//       title={ this.props.title }
//       titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa', textAlign: 'center',  }}
//       files={['http://3.bp.blogspot.com/-yoHsg6Qe4s8/TbaiLfeDOCI/AAAAAAAAACM/jIt9Pe-KlcM/s1600/empty.png']}
//     />
//     <Card.Body>
//       <Button
//         title="add a mallet"
//         large
//         icon={{ name: 'plus-one' }}
//         backgroundColor="#03A9F4"
//         onPress={() => this.props.navigation.navigate('new')}
//       />
//     </Card.Body>
//   </Card>
// </View>
