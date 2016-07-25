var values= [];
var titleName;
var blah=[]
$(document).ready(function(){
  $.ajax({
    url:'http://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
    error: function(err){
      console.log(err)
    },
    method:'GET',
    success: function(roles){
    for(var m of roles) {
      titleName=m.title

      }
    }
  })
})
