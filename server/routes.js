const path      = require('path');
const express   = require('express');
const router    = express.Router();
const request   = require('request');
const nodemailer = require('nodemailer');

const User      = require('./models/user');
const Review    = require('./models/review');
const Idea      = require('./models/idea');
const config    = require('./server-config.js');

//// import lodash
// const _ = require('lodash');

/////////////////////
// USER
// POST - /user - pass info in req.BODY in standard json - Responds with USER object if successful or err object if
// GET - /user - returns USER or error
//

module.exports = (app) => {

  app.get('/sanity', function(req, res, next) {
    console.log('here in sanity')
    res.send('check').catch(error => console.log(error));
  })
  app.get('/sanity/check', function(req, res, next) { res.send('gotcha') });

  /////////////////////
  // create user
  // need to first check and see if there is a FIND BY ID AND CREATE IF DOESNT EXIST
  app.post('/user', function (req, res, next) {
    const user = req.body;
    console.log('req.body', user)

    User.findOne({ id: user.id }, (user, err) => {
      console.log('user', user, 'err', err);
      // check if you can use res.status(err.code).send(err);
      if(err) { res.status(400).send(err) }
      if(user) { res.send(user) };
      if(!user) {
        const Malleter = new User(user);
        Malleter.save()
          .then((result) => {
            res.send(result)
          })
      }
    })
  });

  app.get('/user', function(req, res, next) {
    // check how this is coming in
    const userID = req.body;
    User.findById(userID, (user, err) => {
      if(err) { res.send(err) };
      res.send(user)
    })
  });

  /////////////////////
  // IDEA
  // POST - /idea - pass info in req.BODY in standard json - Responds with IDEA object if successful or err object if
  // GET - /idea - returns IDEA or error
  // id: { type: String, unique: true, index: true },
  // title: String,
  // description: String,
  // best_location: String,
  // best_time: String,
  // time_needed: String,
  // requirements: String,
  // reviews: [ String ]
  //
  /////////////////////
  // could you set result of Idea find to a variable. use async await.
  // move on to the next step if !idea...
  app.post('/idea', async function(req, res, next) {
    const query = { title: req.body.title };
    const update = new Idea(req.body);
    const options = { new: true, upsert: true }
    const callback = (error, result) => {
      if (error) { console.log('error why', error); res.send(error) }
      if (result) { console.log('result what', result); res.send(result); }
    }
    const thisis = await Idea.findOneAndUpdate(query, update, options, callback);
  })

  // GET ONE
  ///////////////
  app.get('/idea/:id', function(req, res, next) {
    // how are you going to send this in???
    const ideaID = req.params.id;
    Idea.findById(ideaID, (idea, err) => {
      res.send(idea);
    })
  });
  // GET ALL
  ///////////////
  app.get('/idea', function(req, res, next) {
    Idea.find()
      .then((results, err) => {
        if(err) { res.send(err) };
        if(results) { res.send(results) };
      })
  })

  // Review CREATE
  // need to check this out to see what goes
  // what's the order of operation? what should go first?
  // do then need callbacks or is mongoose returning promises finally?

  app.post('/idea/:id/review', async function(req, res, next) {
    const review = req.body;
    const ideaID = req.params('id');

    // create the review
    const newReview = new Review(review);
    newReview.ideaID = ideaID;

    const foundIdea = Idea.findById(idea);
    foundIdea.reviews.push(newReview);
    foundIdea.save();

    // do i even need to save the review like this? it's in the idea reviews array so....
    newReview.save().then((result) => {
    })
    // what are you doing in here? will this work???
    // const Idea = await Idea.findById(ideaID, (idea, err) => {
    //   // do you return idea here? or can you just set it equal to the result of findbyid....
    //   return idea
    // })

  })

  // what's LODASH pluck, find, filter best way of identifying one record
  app.get('/review/something', function(req, res, next) {
    let review;
    const idea = Idea.findById(req.params.id, (idea, err) => {
      review = _.filter(idea.reviews, (rvw) => { return rvw.id === req.params.reviewId });
      res.send()
    })
  })
}
