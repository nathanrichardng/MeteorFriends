if (Meteor.isServer) {
  Meteor.methods({
      'removeFriend': function(friendId){
        var userId = Meteor.userId();
          Meteor.users.update({ _id: userId }, {$pull: {friends: friendId} });
          Meteor.users.update({ _id: friendId }, {$pull: {friends: userId} });
          FriendRequests.update({ $or: [{ to: userId, from: friendId }, { to:friendId, from: userId }] }, {$set: {status: 'Rejected'} }, { multi: true });
      }
  });  
}