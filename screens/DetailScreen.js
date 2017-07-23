import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class DetailScreen extends Component {

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { title, requirements, time_needed, best_time, best_location, description, reviews } = this.props.idea;
    return(
      <View>
        <Text>{ title }</Text>
        <Text>{ requirements }</Text>
        <Text>{ time_needed }</Text>
        <Text>{ best_time }</Text>
        <Text>{ best_location }</Text>
        <Text>{ description }</Text>
        <Button
          title="review it"
          backgroundColor="#f27c15"
          onPress={ () => {
            this.props.navigation.navigate('reviewForm')
          }}
        />
      </View>
    )
  }

}

function mapStateToProps(state) {
  return {
    idea: state.activeIdea
  }
};

export default connect(mapStateToProps, null)(DetailScreen)
