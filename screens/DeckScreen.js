import React, { Component } from 'react';
import { View, Text, Platform, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import { fetchIdeas, likeIdea } from '../actions';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Ideas',
    tabBar: {
      icon: ({ tintColor }) => {
        return <Icon name="description" size={30} color={tintColor} />;
      }
    }
  }

  componentWillMount() {
    this.props.fetchIdeas();
  }

  renderCard(idea) {
    return (
      <Card title={idea.title}>
        <View
          style={{ height: 300 }}
          scrollEnabled={false}
          cacheEnabled={Platform.OS === 'android' ? true : false}
        >
          <Image
            style={ styles.image }
            source={require('../assets/images/image-test.jpg')}
          />
        </View>

        <View style={styles.detailWrapper}>
          <Text>{idea.description}</Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{idea.time_needed}</Text>
          <Text>{idea.best_time}</Text>
          <Text>{idea.best_location}</Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{idea.time_needed}</Text>
        </View>
        <Text>
          {idea.requirements.replace(/<b>/g, '').replace(/<\/b/g, '')}
        </Text>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No Ideas Left...">
        <Button
          title="Review yours"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('review')}
        />
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

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  image: {
    width: SCREEN_WIDTH,
    height: 200
  }

};

function mapStateToProps({ ideas }) {
  return { ideas };
}

export default connect(mapStateToProps, { fetchIdeas, likeIdea })(DeckScreen);

// style={{ flex: 1 }}
