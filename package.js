Package.describe({
  name: 'sodiumtellurium:friends',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'A basic friends package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nathanrichardng/MeteorFriends',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use('templating');
  api.use('accounts-password');

  api.addFiles('FriendTemplate.html', "client");
  api.addFiles('FriendHelpers.js', "client");
  api.addFiles('FriendMethods.js', "server");
  
  api.addFiles('FriendRequestTemplate.html', "client");
  api.addFiles('FriendRequestHelpers.js', "client");
  api.addFiles('FriendRequestMethods.js', "server");

  api.addFiles('Publications.js', "server");
  api.addFiles('Subscriptions.js', "client");
  
});