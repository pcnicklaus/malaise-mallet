import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import BackButton from '../components/BackButton';

class DetailScreen extends Component {

  componentWillMount(props) {
  }

  render() {
    const { title, requirements, time_needed, best_time, best_location, description, reviews, imageURL } = this.props.idea;
    return(
      <View style={ styles.container }>
        <BackButton navigation={this.props.navigation} destination={'mallets'} />
        <Image
          style={ styles.image }
          source={{ uri: imageURL }}
        />
        <Text style={ styles.title }>{ title }</Text>
        <View>
          <Text>Requirements: { requirements }</Text>
          <Text>Time needed: { time_needed }</Text>
          <Text>Best time: { best_time }</Text>
          <Text>Best location:{ best_location }</Text>
        </View>
        <Text>{ description }</Text>

        <Button
          title="review it"
          backgroundColor="#f27c15"
          onPress={ () => {
            this.props.navigation.navigate('review')
          }}
        />
      </View>

    )
  }

}

const SCREEN_WIDTH = (Dimensions.get('window').width) - 60;
const SCREEN_HEIGHT = (Dimensions.get('window').height) - 80;
const styles = {
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 5
  },
  container: {
    padding: 10,
    marginTop: 20
  },
  image: {
    width: SCREEN_WIDTH,
    height: (SCREEN_HEIGHT / 5) * 3,
    alignSelf: 'center'
  }
}


function mapStateToProps(state) {
  return {
    idea: state.activeIdea
  }
};

export default connect(mapStateToProps, null)(DetailScreen)
