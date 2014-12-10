require.config({
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone'
  }
});

require([

  // Load our app module and pass it to our definition function
  'sampleapp',
], function(SampleApp){
  // The "app" dependency is passed in as "App"
  SampleApp.initialize();
});
