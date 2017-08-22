Malaise Mallet
- So this was an idea i had to try to keep me from getting all lazy and apathetic. Which doesn’t seem to happen cuz who has time! but seriously, who does?!?!

So you’re gonna need to get react native and expo to get this up and running. But if you like react, you’re gonna really have a lotta fun with react native, trust me.

more info on getting all that done is here:
https://docs.expo.io/versions/latest/index.html

you’re also gonna need a heroku for your backend an an mLab database. If you haven’t done that, you can find more here: https://devcenter.heroku.com/articles/creating-apps. Both of those are a lot scarier then they seem. seriously. no, seriously! :)

I think that should about cover it… but yeah…

TTD: (things to do)
- idea image is hardcoded right now
- add reviews on detail
- build header
- setting screen
- account screen
- redo/animate/something so first screens are fun
- set up card tracking so you don’t show the same one twice
- validations
  - urls
  - email addresses
  - others…???


VII stuff and things
1. Header
2. Do you want change this around so it saves to the db on actions!!!??
3. user management stuff...
    - how do we identify them from the token...
    - fetch user...
    - https://github.com/react-community/react-navigation/issues/464
4. user id / info on
  - mallet form
  - review form
5. Change Schema
  - so they just leave the id in there for the review and idea.
    COST field to review..
    currently...
    fullName: t.String,
    title: t.String,
    best_time: t.String,
    best_location: t.String,
    suggestions: t.String,
    circumstances: t.String,
    willDoAgain: t.Number,
    recommended: t.Boolean


react - nav - hidden items
https://github.com/react-community/react-navigation/issues/719
