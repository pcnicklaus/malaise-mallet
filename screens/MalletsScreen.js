import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { activeIdea } from '../actions';


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
        _id, title, description, requirements, best_time, best_location, reviews
      } = idea;

      return (
        <Card title={title} key={_id}>
          <View style={{ height: 200 }} scrollEnabled={false}>
            <View style={styles.detailWrapper}>
              <Text>{ _id } </Text>
              <Text style={styles.italics}>{title}</Text>
              <Text>{description}</Text>
              <Text>{best_location}</Text>
              <Text>{best_time}</Text>
              <Text>{ _id } </Text>
            </View>
            <Button
              title="screw off?!"
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
      <ScrollView>
        {this.renderLikedIdeas()}
      </ScrollView>
    );
  }
}

const styles = {
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
