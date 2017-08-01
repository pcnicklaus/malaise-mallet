import React, { Component } from 'react';
import { View, Text, Platform, Image, Dimensions, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';

import Swipe from '../components/Swipe';

import { fetchIdeas, likeIdea } from '../actions';

import Styles from '../styles';

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
      <Card style={{height: SCREEN_HEIGHT}}>
        <View
          scrollEnabled={false}
          cacheEnabled={Platform.OS === 'android' ? true : false}
        >
          <Image
            style={ styles.image }
            source={{ uri: idea.imageURL }}
          />
          <View>
          <Text style={ styles.title3 }>{ idea.title }</Text>
          <Text style={ styles.body }>{ idea.description }</Text>
          </View>
        </View>


      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (

      <Card style={{ height: SCREEN_HEIGHT }}>
        <Image
          style={ styles.image }
          source={{ uri: 'http://3.bp.blogspot.com/-yoHsg6Qe4s8/TbaiLfeDOCI/AAAAAAAAACM/jIt9Pe-KlcM/s1600/empty.png' }}
        />
        <View>
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
        </View>
      </Card>
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

const SCREEN_WIDTH = (Dimensions.get('window').width) - 60;
const SCREEN_HEIGHT = (Dimensions.get('window').height) - 80;


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


};

function mapStateToProps({ ideas }) {
  return { ideas };
}

export default connect(mapStateToProps, { fetchIdeas, likeIdea })(DeckScreen);

// style={{ flex: 1 }}
