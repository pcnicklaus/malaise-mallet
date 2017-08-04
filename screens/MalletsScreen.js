import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Grid, Row, Col } from 'react-native-elements';
import { connect } from 'react-redux';
import { Card, Icon } from 'react-native-material-design';
import CardMedia from 'react-native-card-media';

import { activeIdea } from '../actions';
import Styles from '../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH, IMAGE_HEIGHT_3FOURTHS } from '../shared';
import NoMoreCards from '../components/NoMoreCards';

class MalletsScreen extends Component {
  static navigationOptions = {
    title: 'Your Mallets',
    tabBar: {
      icon: ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />;
      }
    },
  }

  onPress = (idea) => {
    this.props.activeIdea(idea);
    this.props.navigation.navigate('detail')
  }

  renderBody = (requirements, best_time, best_location, time_needed) => {
    return (
      <Grid style={{ marginBottom: 10 }}>
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
    )
  }

  renderLikedIdeas() {
    // console.log('this.props', this.props);

    return this.props.likedIdeas.map(idea => {
      // console.log('idea in review screen', idea)
      const { _id, title, description, requirements, best_time, best_location, time_needed } = idea;

      return (

        <View style={styles.scene} key={_id}>
           <View>
             <View style={styles.container}>
               <Card style={styles.cardStyle}>
                 <CardMedia
                   style={{ height: 150 }}
                   title={ title }
                   titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa' }}
                   files={[`https://blog.vandalog.com/wp-content/uploads/2015/11/al-640x480.jpg`]}
                   onPress={ () => this.onPress(idea) }
                 />
                 <Card.Body>
                   { this.renderBody(description, best_time, best_location, time_needed) }
                   <Button
                     style={{height: 30, marginTop: 15}}
                     title="more info"
                     icon={{ name: 'pageview'}}
                     backgroundColor="#03A9F4"
                     onPress={ () =>  this.onPress(idea) }
                   />
                 </Card.Body>
               </Card>
             </View>
           </View>
         </View>
      );
    });
  }

  render() {
    if(this.props.likedIdeas.length == 0) {
      return(
        <View style={{ marginTop: 20 }}>
            <View style={styles.container}>
              <Card style={styles.cardStyle}>
                <CardMedia
                  style={{ height: IMAGE_HEIGHT_3FOURTHS }}
                  title={"all outta mallets! \n maybe do one :)"}
                  titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa', textAlign: 'center'}}
                  files={['https://i.vimeocdn.com/portrait/1274237_300x300']}
                  scrollEnabled={false}
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


      )
    }

    // console.log('this props review screen', this.props)
    // console.log('this state review screen', this.state)
    return (
      <ScrollView style={{ marginTop: 10 }}>
        { this.renderLikedIdeas() }
      </ScrollView>
    );
  }
}
 // justifyContent: 'center', alignItems: 'center'

const styles = {
  scene: {
    height: SCREEN_HEIGHT,
    marginTop: 20
  },
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
  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

function mapStateToProps(state) {
  // console.log('state in mapstateto props - REVIEW screen')
  return { likedIdeas: state.likedIdeas };
}

export default connect(mapStateToProps, { activeIdea })(MalletsScreen);

// <NoMoreCards
//   navigation={ this.props.navigation }
//   title={"no more liked mallets! maybe try one? :)"}
// />

// <View style={styles.detailWrapper}>
//   <Text>What: {description}</Text>
// </View>

//
// header: ({ navigate }) => {
//   return {
//     right: (
//       <Button
//         title="Settings"
//         onPress={() => navigate('settings')}
//         backgroundColor="rgba(0,0,0,0)"
//         color="rgba(0, 122, 255, 1)"
//       />
//     ),
//     style: {
//       marginTop: Platform.OS === 'android' ? 24 : 0
//     }
//   };
// }
