import React, { Component } from 'react';
import { View, Text, Platform, Image, Dimensions, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';
import { Card, Icon } from 'react-native-material-design';
import CardMedia from 'react-native-card-media';

import { SCREEN_WIDTH, SCREEN_HEIGHT, IMAGE_HEIGHT_3FOURTHS } from '../shared';
import Swipe from '../components/Swipe';
import CardComponent from '../components/Card'
import Styles from '../styles';

import { fetchIdeas, likeIdea } from '../actions';

const files1 = [
  `https://blog.vandalog.com/wp-content/uploads/2015/11/al-640x480.jpg`,
]

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Ideas',
    tabBar: {
      icon: ({ tintColor }) => {
        return <Icon name="description" size={30} color={tintColor} />;
      }
    }
  }

  async componentWillMount() {
    await this.props.fetchIdeas();
  }

  renderCard(idea) {
    return (

      <View style={styles.scene}>

          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <CardMedia
                style={{ height: SCREEN_HEIGHT }}
                title={ idea.title }
                titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa' }}
                files={files1}
                scrollEnabled={false}
                cacheEnabled={Platform.OS === 'android' ? true : false}
                titleTouchable={false}
                imageTouchable={false}
              />
            </Card>
          </View>
      </View>

    );
  }

  renderNoMoreCards = () => {
    return (

      <View style={styles.scene}>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <CardMedia
                style={{ height: IMAGE_HEIGHT_3FOURTHS }}
                title={"all outta new mallets!"}
                titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa', textAlign: 'center'}}
                files={['http://3.bp.blogspot.com/-yoHsg6Qe4s8/TbaiLfeDOCI/AAAAAAAAACM/jIt9Pe-KlcM/s1600/empty.png']}
                scrollEnabled={false}
                cacheEnabled={Platform.OS === 'android' ? true : false}
                titleTouchable={false}
                imageTouchable={false}
              />
              <Card.Body>
                <Button
                  title="my mallets"
                  large
                  icon={{ name: 'assignment-ind' }}
                  backgroundColor="#03A9F4"
                  onPress={() => this.props.navigation.navigate('mallets')}
                />
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
    );
  }



  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.ideas}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={ idea => this.props.likeIdea(idea) }
          keyProp="_id"
        />
      </View>
    );
  }
}



const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  image: {
    width: SCREEN_WIDTH,
    height: (SCREEN_HEIGHT / 5) * 3
  },
  title2: {
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 28,
    letterSpacing: 0.352
  },
  headline: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.408
  },
  body: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.408
  },
  subhead: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.24
  },
  title3: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.38
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
  scene: {
    height: SCREEN_HEIGHT,
  }


};

function mapStateToProps({ ideas }) {
  return { ideas };
}

export default connect(mapStateToProps, { fetchIdeas, likeIdea })(DeckScreen);

// style={{ flex: 1 }}
// <Card style={{height: SCREEN_HEIGHT}}>
//   <View
//     scrollEnabled={false}
//     cacheEnabled={Platform.OS === 'android' ? true : false}
//   >
//     <Image
//       style={ styles.image }
//       source={{ uri: idea.imageURL }}
//     />
//     <View>
//     <Text style={ styles.title3 }>{ idea.title }</Text>
//     <Text style={ styles.body }>{ idea.description }</Text>
//     </View>
//   </View>
//
//
// </Card>
