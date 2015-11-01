if (Meteor.isServer) {

  Meteor.publish('friendRequests', function() {
    return FriendRequests.find({
      $or: [
        {to: this.userId},
        {from: this.userId}
      ]
    });
  });

  Meteor.publish('users', function() {
    return Meteor.users.find({}, {fields: {username: 1, emails: 1, _id: 1, friends: 1} });
  });
  
}
