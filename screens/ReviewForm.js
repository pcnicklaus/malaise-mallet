import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';

import t from 'tcomb-form-native';
const Form = t.form.Form;

// import t as tValid from 'tcomb-validation';
const validate = t.validate;

class ReviewForm extends Component {

  state = { value: {} }

  yesNoMaybe = t.enums({
    Y: 'Yes',
    N: 'No',
    M: 'Maybe'
  });

  Review = t.struct({
    name: t.String,
    title: t.String,
    body: t.String,
    recommendations: t.maybe(t.String),
    gotchas: t.maybe(t.String),
    willDoAgain: t.maybe(this.yesNoMaybe),
    recommended: t.maybe(this.yesNoMaybe)
  });

  onChange = (value) => {
    this.setState({ value });
  }

  clearForm = () => {
    this.setState({ value: null });
  }

  handleSubmit = (result) => {
    console.log('herer', result)
    const id = this.props.idea._id;
    console.log('id', id)
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

    var value = this.refs.form.getValue();
    const result = validate(value, this.Review)

    if (result.isValid()) {

      this.handleSubmit(result)
    }
    else {

      const text = result.firstError().message;

      Alert.alert(
        'There was a problem...\n',
        text,
        [{ text: 'OK', onPress: () => console.log('OK Pressed!') }]
      );
    }
  }

  formOptions = {
    auto: 'placeholders',
    label: 'My struct label'
  };

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={this.Review}
          options={this.formOptions}
          value={this.state.value}
          onChange={ this.onChange }
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
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

function mapStateToProps(state) {
  return {
    idea: state.activeIdea
  }
}

export default connect(mapStateToProps, null)(ReviewForm)
