if (Meteor.isClient) {
  // This code only runs on the client
  Template.friends.helpers({
    friends: function() {
    	return Meteor.users.find({ _id: { $in: Meteor.user().friends } });
    }
  });

  //add event and template to remove friend
  Template.friend.events({
    "click .remove-friend": function(event) {
      var friendId = this._id
      console.log(friendId);
      Meteor.call('removeFriend', friendId);
    }
  });

  Template.selectMultipleFriends.helpers({
    friends: function() {
      console.log(Meteor.user());
      return Meteor.users.find({_id: { $in: Meteor.user().friends } });
    }
  });

  Template.selectOneFriend.helpers({
    friends: function() {
      console.log(Meteor.user());
      return Meteor.users.find({_id: { $in: Meteor.user().friends } });
    }
  });

  Template.selectOneFriendOrSelf.helpers({
    options: function() {
      console.log(Meteor.user());
      return Meteor.users.find({ $or: [ 
          { _id: { $in: Meteor.user().friends } },
          { _id: Meteor.userId() }
        ]
      });
    }
  });
}