import React, { StyleSheet } from 'react-native';

export default StyleSheet.create({
  //reviewform
  container: {
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  title1: {
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 34,
    letterSpacing: 0.364
  },
  title2: {
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 28,
    letterSpacing: 0.352
  },
  title3: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.38
  },
  headline: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.408
  },
  body: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.408
  },
  callout: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: -0.32
  },
  subhead: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.24
  },
  footnote: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.078
  },
  caption1: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  caption2: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.066
  },
  //reviewform
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  //review form
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  // needs to be put into the component
  backButton: {
    height: 30,
    width: 60,
    // backgroundColor: '#48BBEC',
    // borderColor: '#48BBEC',
    // borderWidth: 1,
    // borderRadius: 8,
    // marginBottom: 2,
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
    fontSize: 15,
    textAlign: 'left'
  }
});
