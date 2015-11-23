if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter',4 );
  Session.set('answer',"");
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
  Template.hello.helpers({
    answer: function () {
      return Session.get('answer');
    }
  });

  Template.hello.events({
    'click .subs': function () {
      // decrement the counter when button is clicked
      Session.set('counter', Session.get('counter') - 1);
    }
  });


  Template.hello.events({
    'click .add': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });


Template.hello.events({
  'click .check': function () {
    if (Session.get('counter') != 0) {
      Session.set('answer',"Wrong")
      } else {
        Session.set('answer',"Right")
      };
  }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
