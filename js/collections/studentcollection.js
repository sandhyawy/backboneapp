// Filename: collections/students
define([
  'underscore',
  'backbone',
  'models/student'
], function(_, Backbone, StudentModel){
  var StudentCollection = Backbone.Collection.extend({
    model: StudentModel
  });
  // Return the model for the module
  return StudentCollection;
});