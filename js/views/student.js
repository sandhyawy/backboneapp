// Filename: views/students
define([
  'jquery',
  'underscore',
  'backbone',  
  'models/student',
  'views/studentdetails'
], function($, _, Backbone, StudentModel, StudentDetailView){
  var StudentView = Backbone.View.extend({
      tagName:"tr",
      className:"studentrow",
      template: _.template("<td><%= name %></td><td><%= rollno %></td><td><%= marks %></td>"),
      initialize: function(){                    
            this.model.on("change", this.render, this);      
            _.bindAll(this, 'render', 'showstudent'); // every fun
      },
      showstudent : function(e){
            var details = new StudentDetailView({model:this.model});
            var routeid = "#students/" + this.model.get("rollno");
           // sroute.navigate(routeid);
      },
      render : function(){
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.on("click", this.showstudent); 
            return this;
      }
  });
  // Our module now returns our view
  return StudentView;
});