import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableHighlight, Alert, Button } from 'react-native';
import BackButton from '../components/BackButton.js';
import Styles from '../styles';

// form and validation handled by...
import t from 'tcomb-form-native';
const Form = t.form.Form;
const validate = t.validate;


class ReviewForm extends Component {

  state = { value: {} }

  yesNoMaybe = t.enums({ Y: 'Yes', N: 'No', M: 'Maybe'});

  Review = t.struct({
    name: t.String,
    title: t.String,
    body: t.String,
    recommendations: t.maybe(t.String),
    gotchas: t.maybe(t.String),
    willDoAgain: t.maybe(this.yesNoMaybe),
    recommended: t.maybe(this.yesNoMaybe)
  });

  onChange = (value) => { this.setState({ value }); }
  clearForm = () => { this.setState({ value: null }); }

  handleSubmit = (result) => {
    const id = this.props.idea._id;
    axios.post(`http://localhost:3050/idea/${id}/review`, result)
      .then((review) => {
        this.clearForm();
        Alert.alert(
          'Thanks soooooo much for your review!!!\n',
          'Seriously, without people like you, we\'d be absolutely nowhere! Which, if you want to be precise, is technically where we are but we\'re working toward\' something here man and that can\'t be rushed!! Or it could but we just don\'t know how... Regardless, this is about you and not us so again, Thanks a bunch!!!',
          [{ text: 'OK', onPress: () => console.log('OK Pressed!') }]
        );
        this.props.navigation.navigate('detail');
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
    let result = validate(value, this.Review)

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
      <View style={Styles.container}>
        <BackButton navigation={navigation} destination={'detail'}/>
        <Text style={Styles.title}>{this.props.idea.title}</Text>
        <Text style={Styles.subhead}>Review away! And be straight with us :)</Text>

        <Form
          ref="form"
          type={this.Review}
          options={{ auto: 'placeholders' }}
          value={this.state.value}
          onChange={ this.onChange }
        />
        <TouchableHighlight style={Styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={Styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    idea: state.activeIdea
  }
}

export default connect(mapStateToProps, null)(ReviewForm)






  // onBackPress = () => {
  //   this.props.navigation.navigate('detail');
  // }
  // <TouchableHighlight onPress={this.onBackPress}>
  //   <Text style={Styles.backButton}>
  //      back
  //   </Text>
  // </TouchableHighlight>
