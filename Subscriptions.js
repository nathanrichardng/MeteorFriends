if (Meteor.isClient) {
  Meteor.subscribe('friendRequests');
  Meteor.subscribe('users');
}