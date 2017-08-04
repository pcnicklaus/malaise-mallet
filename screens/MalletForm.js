import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ScrollView, View, Text, StyleSheet, TouchableHighlight, Alert, Button } from 'react-native';
import BackButton from '../components/BackButton.js';
import Styles from '../styles';

// form and validation handled by...
import t from 'tcomb-form-native';
const Form = t.form.Form;
const validate = t.validate;


class MalletForm extends Component {

  state = { value: {} }

  Mallet = t.struct({
    title: t.String,
    description: t.String,
    requirements: t.maybe(t.String),
    time_needed: t.maybe(t.String),
    best_time: t.maybe(t.String),
    best_location: t.maybe(t.String),
    imageURL: t.String,
  });

  options = {
    fields: {
      title: { label: 'Mallet Name-ish type thing', placeholder: 'Bouncey Park', placeholderTextColor: '#6666C1'},
      description: { label: 'Tell us about it :)', placeholder: 'Walls and floors made of trapolines along with a ballpit that makes an adult feel like a child...', multiline: true, numberOfLines: 2, placeholderTextColor: '#6666C1' },
      requirements: { label: 'Anything we need?', placeholder: 'ability to tolerate children, willingness to jump around like a big idiot!', placeholderTextColor: '#6666C1'},
      time_needed: { label: 'About how long...', placeholder: 'a couple hours', placeholderTextColor: '#6666C1'},
      best_time: { label: 'Is there a good time', placeholder: 'not sure if there is one...', placeholderTextColor: '#6666C1'},
      best_location: { label: "How 'bout a best place?", placeholder: 'Bouncey hoes and moe on 4th in Denver', placeholderTextColor: '#6666C1'},
      imageURL: { label: 'Picture please! And google is fine!', placeholder: 'www.image.com/people-having-fun.jpg', placeholderTextColor: '#6666C1'}
    }
  }

  onChange = (value) => { this.setState({ value }); }
  clearForm = () => { this.setState({ value: null }); }

  handleSubmit = (result) => {
    console.log('result \n', result)
    axios.post(`http://localhost:3050/idea`, result)
      .then((mallet) => {
        this.clearForm();
        Alert.alert(
          'What? What?!? j/k THANKS!!!!\n',
          'Seriously, without people like you, we\'d be absolutely nowhere! Which, if you want to be precise, is technically where we are but we\'re working toward\' something here man and that can\'t be rushed!! Or it could but we just don\'t know how... Regardless, this is about you and not us so again, Thanks a bunch!!!',
          [{ text: 'OK', onPress: () => console.log('OK Pressed!') }]
        );
        this.props.navigation.navigate('mallets');
      })
      .catch( err => {
        Alert.alert(
          'There was a problem...\n',
          err.message,
          [{ text: 'OK', onPress: () => console.log('OK Pressed!') }]
        );
      })
  }

  onPress = () => {
    let value = this.refs.form.getValue();
    let result = validate(value, this.Mallet)

    if (result.isValid()) {
      this.handleSubmit(result)
    } else {
      const text = result.firstError().message;
      Alert.alert(
        'There was a problem...\n',
        text,
        [{ text: 'OK', onPress: () => console.log('OK Pressed!') }]
      );
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={ localStyles.scrollview }>
        <BackButton navigation={navigation} destination={'mallets'} style={{marginTop: 30, marginLeft: 20}}/>
        <View style={ localStyles.container }>
          <Text style={localStyles.title}>New Mallet</Text>

          <Form
            ref="form"
            type={ this.Mallet }
            options={ this.options }
            value={ this.state.value }
            onChange={ this.onChange }
            style={{ padding: 0, margin: 0 }}
          />
          <TouchableHighlight style={localStyles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={localStyles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    idea: state.activeIdea
  }
}

var localStyles = StyleSheet.create({
  scrollview: {
    marginTop: 20,
  },
  container: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default connect(mapStateToProps, null)(MalletForm)






  // onBackPress = () => {
  //   this.props.navigation.navigate('detail');
  // }
  // <TouchableHighlight onPress={this.onBackPress}>
  //   <Text style={Styles.backButton}>
  //      back
  //   </Text>
  // </TouchableHighlight>
