define([
  'jquery',
  'underscore',
  'backbone',
  'views/students',
  'views/student'
], function($, _, Backbone, StudentsView, StudentView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '*actions': 'StudentsData',
      '/students': 'StudentsData',
      '/students/:id': 'StudentData'      
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('StudentsData', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'

      var studentsview = new StudentsView();
      studentsview.render();
    });
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('StudentData', function(){
      var studentview = new StudentView();
      studentview.render();
    });
     var studentsview = new StudentsView();
    studentsview.render();
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});