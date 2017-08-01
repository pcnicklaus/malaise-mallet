import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Image, Dimensions } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import BackButton from '../components/BackButton';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../shared';
import Styles from '../styles';

class DetailScreen extends Component {

  componentWillMount(props) {
  }

  render() {
    const { title, requirements, time_needed, best_time, best_location, description, reviews, imageURL } = this.props.idea;
    return(
      <ScrollView style={ Styles.container }>
        <BackButton navigation={this.props.navigation} destination={'mallets'} />

        <Card title={title} style={{ marginTop: '-20 !important' }}>
          <View>
            <Image
              style={ Styles.image }
              source={{ uri: imageURL }}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text>{ description }</Text>
            </View>
            <View style={ styles.row }>
              <Text style={ styles.question }>Where:</Text>
              <Text style={ styles.content }>{ best_location }</Text>
            </View>
            <View style={ styles.row }>
              <Text style={ styles.question }>When:</Text>
              <Text style={ styles.content }>{ best_time }</Text>
            </View>
            <View style={ styles.row }>
              <Text style={ styles.question }>Time Needed:</Text>
              <Text style={ styles.content }>{ time_needed }</Text>
            </View>
            <View style={ styles.row }>
              <Text style={ styles.question }>Requirements:</Text>
              <Text numberOfLines={ 2 } style={ styles.content }>{ requirements }</Text>
            </View>

            <Button
              icon={{ name: 'announcement'}}

              title="review it"
              backgroundColor="#f27c15"
              onPress={ () => {
                this.props.navigation.navigate('review')
              }}
            />

          </View>
        </Card>







      </ScrollView>

    )
  }

}
//
// <Text style={ Styles.title }>{ title }</Text>
// <View>
//   <Text>Requirements: { requirements }</Text>
//   <Text>Time needed: { time_needed }</Text>
//   <Text>Best time: { best_time }</Text>
//   <Text>Best location:{ best_location }</Text>
// </View>
// <Text>{ description }</Text>
//
// <Button
//   title="review it"
//   backgroundColor="#f27c15"
//   onPress={ () => {
//     this.props.navigation.navigate('review')
//   }}
// />


const styles = {
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  question: {
    width: SCREEN_WIDTH / 3,
    textAlign: 'right',
    marginRight: 10,
  },
  content: {
    width: (SCREEN_WIDTH / 4) * 3,
    paddingRight: 25,
  },
}

//
// const styles = {
//   title: {
//     fontSize: 24,
//     alignSelf: 'center',
//     marginBottom: 5
//   },
//   image: {
//     width: SCREEN_WIDTH,
//     height: (SCREEN_HEIGHT / 5) * 3,
//     alignSelf: 'center'
//   }
// }


function mapStateToProps(state) {
  return {
    idea: state.activeIdea
  }
};

export default connect(mapStateToProps, null)(DetailScreen)
