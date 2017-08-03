import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Image, Dimensions, TouchableHighlight } from 'react-native';
import { Button, Card, Icon, Grid, Row, Col, Divider } from 'react-native-elements';

import BackButton from '../components/BackButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH, IMAGE_HEIGHT_3FOURTHS } from '../shared';
import Styles from '../styles';
import CardComponent from '../components/Card'

class DetailScreen extends Component {

  componentWillMount(props) {
  }

  renderButton = () => {
    return (
      <TouchableHighlight
      onPress={ () => this.props.navigation.navigate('mallets') }
      >
        <Text style={ localStyles.button }>back</Text>
      </TouchableHighlight>
    )
  }

  renderBody = () => {
    const { title, requirements, time_needed, best_time, best_location, description, reviews, imageURL } = this.props.idea;

    return (
      <View>
        <Text>{ description }</Text>
        <Divider style={ localStyles.divider } />
        <Grid>
          <Row size={1}>
            <Col size={25}><Text>You need:</Text></Col>
            <Col size={70}><Text style={{ marginBottom: 5 }}>{ requirements }</Text></Col>
          </Row>
          <Row size={1}>
            <Col size={25}><Text>Best time:</Text></Col>
            <Col size={70}><Text style={{ marginBottom: 5 }}>{ best_time }</Text></Col>
          </Row>
          <Row size={1}>
            <Col size={25}><Text>How Long:</Text></Col>
            <Col size={70}><Text style={{ marginBottom: 5 }}>{ time_needed }</Text></Col>
          </Row>
          <Row size={1}>
            <Col size={25}><Text>Where:</Text></Col>
            <Col size={70}><Text>{ best_location }</Text></Col>
          </Row>
        </Grid>
        <Divider style={ localStyles.divider } />
        <Button
          icon={{ name: 'announcement'}}
          style={{ margin: 10 }}
          title="review it"
          backgroundColor="#f27c15"
          onPress={ () => { this.props.navigation.navigate('review') } }
        />
      </View>
    )
  }

  render() {

    return(
      <CardComponent idea={ this.props.idea } renderBody={ this.renderBody } title={ this.props.title } imageHeight={ IMAGE_HEIGHT_3FOURTHS } renderBack={ this.renderButton }/>
    )
  }
}



const localStyles = {
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
  button: {
    color: '#007AFF',
    textAlign: 'left',
    fontSize: 18,
    paddingLeft: 5,
    // paddingTop: 25,
    // paddingBottom: 15
  },
  cardContainer: {
    margin: 0
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 40,
    marginLeft: 40,
    backgroundColor: 'gray'
  }
}


function mapStateToProps(state) {
  return {
    idea: state.activeIdea
  }
};

export default connect(mapStateToProps, null)(DetailScreen)
// const { title, requirements, time_needed, best_time, best_location, description, reviews, imageURL } = this.props.idea;
//
// return (
//   <ScrollView style={{ padding: 10, marginTop: 10}}>
//     <TouchableHighlight
//       onPress={ () => this.props.navigation.navigate('mallets') }
//     >
//       <Text style={ localStyles.button }>
//          back
//       </Text>
//     </TouchableHighlight>
//
//
//     <Card title={title} containerStyle={ localStyles.cardContainer }>
//       <View style={{ minHeight: SCREEN_HEIGHT }}>
//         <Image
//           style={ Styles.image }
//           source={{ uri: imageURL }}
//         />
//         <View style={{ flexDirection: 'column' }}>
//           <Text>{ description }</Text>
//         </View>
//         <View style={ localStyles.row }>
//           <Text style={ localStyles.question }>Where:</Text>
//           <Text style={ localStyles.content }>{ best_location }</Text>
//         </View>
//         <View style={ localStyles.row }>
//           <Text style={ localStyles.question }>When:</Text>
//           <Text style={ localStyles.content }>{ best_time }</Text>
//         </View>
//         <View style={ localStyles.row }>
//           <Text style={ localStyles.question }>Time Needed:</Text>
//           <Text style={ localStyles.content }>{ time_needed }</Text>
//         </View>
//         <View style={ localStyles.row }>
//           <Text style={ localStyles.question }>Requirements:</Text>
//           <Text numberOfLines={ 2 } style={ localStyles.content }>{ requirements }</Text>
//         </View>
//
//         <Button
//           icon={{ name: 'announcement'}}
//           title="review it"
//           backgroundColor="#f27c15"
//           onPress={ () => {
//             this.props.navigation.navigate('review')
//           }}
//         />
//       </View>
//     </Card>
//   </ScrollView>
// )


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
//
// const localStyles = {
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
