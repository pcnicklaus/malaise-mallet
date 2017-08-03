import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, } from 'react-native';
import { Card, Icon } from 'react-native-material-design';
import CardMedia from 'react-native-card-media';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../shared';

const files1 = [
  `https://blog.vandalog.com/wp-content/uploads/2015/11/al-640x480.jpg`,
]

/*
1) files - Array of images
2) css - is it full screen or scrollEnabled - IMAGE height
  - first card, all image, little bit of text
  - card detail, smaller images, more text
3) Content/body

*/

export default class CardExample extends Component {


  render () {
    return (
      <ScrollView>

        <View style={ styles.scene }>
            <ScrollView>
              <View style={ styles.container }>

                <Card style={ styles.cardStyle }>
                  <CardMedia
                    style={ styles.cardMedia }
                    title="Title"
                    titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa' }}
                    files={files1}
                    onPress={() => this.onPress()}
                  />
                  <Card.Body>
                    <Text>
                      Multiple image component for React Native
                    </Text>
                  </Card.Body>
                </Card>

              </View>
            </ScrollView>
          </View>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  scene: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardStyle: {
    width: SCREEN_WIDTH,
  },
  cardMedia: {
    height: 3 * (SCREEN_HEIGHT / 4),
  }
});
