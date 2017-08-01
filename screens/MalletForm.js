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


class MalletForm extends Component {

  state = { value: {} }

  Mallet = t.struct({
    title: t.String,
    imageURL: t.String,
    description: t.String,  
    requirements: t.maybe(t.String),
    time_needed: t.maybe(t.String),
    best_time: t.maybe(t.String),
    best_location: t.maybe(t.String),
  });

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
      <View style={ localStyles.container }>
        <BackButton navigation={navigation} destination={'mallets'}/>
        <Text style={Styles.title}>New Mallet</Text>

        <Form
          ref="form"
          type={this.Mallet}
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

const localStyles = {
  container: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 20,
  },
}

export default connect(mapStateToProps, null)(MalletForm)






  // onBackPress = () => {
  //   this.props.navigation.navigate('detail');
  // }
  // <TouchableHighlight onPress={this.onBackPress}>
  //   <Text style={Styles.backButton}>
  //      back
  //   </Text>
  // </TouchableHighlight>
