// Filename: views/students
define([
  'jquery',
  'underscore',
  'backbone',
  'models/student',
  'collections/studentcollection',
  'views/studentdetails',
  'views/student'  
], function($, _, Backbone, StudentModel, StudentCollection, StudentDetailView, StudentView){
  var StudentsView = Backbone.View.extend({
    tagName:"table",
    initialize:function(options){
            this.options = options;
            (this.$el).html("<thead><tr><td>Name</td><td>Roll No</td><td>Marks</td></tr></thead>");            
    },    
    GetData : function(that)
    {               
      $.get("students.json", function(data)
      {        
        that.collection.set(JSON.parse(data));
      });
    },
    render:function(){
      var that = this;
      $.get("students.json", function(data)
      {
          that.collection = new StudentCollection;
          that.collection.set(JSON.parse(data));          
          if(that.options && that.options.id)
          { 
              model = that.collection.get(that.options.id);                    
              var details = new StudentDetailView({model:model});
          }
          else
          {
            that.collection.each(function(model){
              var sview = new StudentView({model:model});
              var sviewel = sview.render();
              $(that.$el).append(sviewel.$el);
              return sviewel;     
            });
          }                
        $("#viewdata").html(that.$el);
      });     
      window.setInterval(this.GetData, 5000, this);                    
    }
  });
  // Our module now returns our view
  return StudentsView;
});