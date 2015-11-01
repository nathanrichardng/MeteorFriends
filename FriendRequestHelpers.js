if (Meteor.isClient) {
  // This code only runs on the client
  Template.friendRequests.helpers({
    friendRequests: function() {
    	return FriendRequests.find({ to: Meteor.userId(), status: 'Pending' }, {
        transform: function(doc){
          var toUser = Meteor.users.findOne({ _id: doc.to });
          var fromUser = Meteor.users.findOne({ _id: doc.from });

          //change this to return user profile instead later on
          var toUserName = toUser.username;
          var fromUserName = fromUser.username;

          var transformedDoc = {
              to: toUserName,
              from: fromUserName,
              createdAt: doc.createdAt.toDateString(),
              status: doc.status
          }
          return transformedDoc;
        }
      });
    }
  });

  Template.sentFriendRequests.helpers({
    sentFriendRequests: function() {
      return FriendRequests.find({ from: Meteor.userId(), status: 'Pending' }, {
        transform: function(doc){
          var toUser = Meteor.users.findOne({ _id: doc.to });
          var fromUser = Meteor.users.findOne({ _id: doc.from });

          //change this to return user profile instead later on
          var toUserName = toUser.username;
          var fromUserName= fromUser.username;
          var transformedDoc = {
              to: toUserName,
              from: fromUserName,
              createdAt: doc.createdAt.toDateString(),
              status: doc.status
          }
          console.log(transformedDoc);
          return transformedDoc;
        }
      });
    }
  });

  Template.addFriendRequestForm.events({
  	"submit .add-friendRequest": function(event) {
  		event.preventDefault();
  		var toUser = event.target.toUser.value;
  		
  		Meteor.call('addFriendRequest', toUser);
  		event.target.toUser.value = "";
  	}
  });

  Template.friendRequest.events({
    "click .accept-friendRequest": function(event) {
      var friendRequest = this._id;
      Meteor.call('acceptFriendRequest', friendRequest);
    }
  });

  Template.friendRequest.events({
    "click .reject-friendRequest": function(event) {
      var friendRequest = this._id;
      Meteor.call('rejectFriendRequest', friendRequest);
    }
  });

  Template.friendRequestCounter.helpers({
    numberOfFriendRequests: function() {
        return FriendRequests.find({ to: Meteor.userId(), status: 'Pending' }).count();
    }
  });
}