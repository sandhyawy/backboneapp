// Filename: models/student
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var StudentModel = Backbone.Model.extend({
    name:"",
	rollno:"",
	marks:"",
	idAttribute: "rollno"
  });
  // Return the model for the module
  return StudentModel;
});