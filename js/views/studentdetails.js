// Filename: views/studentdetails
define([
  'jquery',
  'underscore',
  'backbone',  
  'models/student'
], function($, _, Backbone, StudentModel){
  var StudentDetailsView = Backbone.View.extend({
     template: _.template($("#studentrecord").html()),
        initialize:function(){            
            this.$el.html(this.template(this.model.toJSON()));
            $("#viewdata").html(this.$el);
            return this;
        },
        events:{
            "click #back": function(){                
              }                
        }
    });
  // Our module now returns our view
  return StudentDetailsView;
});