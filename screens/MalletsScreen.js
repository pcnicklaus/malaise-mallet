import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { activeIdea } from '../actions';

import Styles from '../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../shared';

class MalletsScreen extends Component {
  static navigationOptions = {
    title: 'Review Ideas',
    tabBar: {
      icon: ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />;
      }
    },
  }


  renderLikedIdeas() {
    // console.log('this.props', this.props);

    return this.props.likedIdeas.map(idea => {
      // console.log('idea in review screen', idea)
      const {
        _id, title, description, requirements, best_time, best_location, time_needed, reviews
      } = idea;

      return (
        <Card title={title} key={_id}>
          <View style={{ height: 200 }} scrollEnabled={false}>
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
              style={{height: 50}}
              title="more info"
              icon={{ name: 'pageview'}}
              backgroundColor="#03A9F4"
              onPress={() => {
                this.props.activeIdea(idea);

                this.props.navigation.navigate('detail')
                }
              }
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    if(this.props.likedIdeas.length == 0) {
      return(
        <View>
          <Text>you aint got no ideas to review yo!</Text>
          <Text>you aint got no ideas to review yo!</Text>
          <Text>you aint got no ideas to review yo!</Text>
          <Text>you aint got no ideas to review yo!</Text>
          <Text>you aint got no ideas to review yo!</Text>
        </View>
      )

    }

    // console.log('this props review screen', this.props)
    // console.log('this state review screen', this.state)
    return (
      <ScrollView style={{ marginTop: 10 }}>
        {this.renderLikedIdeas()}
      </ScrollView>
    );
  }
}
 // justifyContent: 'center', alignItems: 'center'

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
