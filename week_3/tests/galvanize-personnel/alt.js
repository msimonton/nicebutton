

$(function(){   //shorthand for $(document).ready
  $.ajax({
    url:'http://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
    error: function(err) {
      console.log(err)
    },
    method:'GET',
    success:function(role)  {
      for(var m of role)  {
        var $choice= $("<option>");
        $choice.text(m.title);
        $choice.attr("value", m.img)
        $('#roleSelect').append($choice);
      }
      $('#roleSelect').change(function(event) {
      $("#pics").attr("src",$(this).val()).fadeIn(600)
    })

  }})
  $('form').submit(function(event) {
    event.preventDefault();
    var formInfo={
      firstName:$('#firstName').val(),
      lastName:$('#lastName').val(),
      role: $('#roleSelect option:selected').text()
    }
      console.log(formInfo)


    var sent= $.ajax({
      type:'POST',
      url:'http://galvanize-student-apis.herokuapp.com/gpersonnel/users',
      data: formInfo,
      dataType: 'text',
      success: function(results) {$('#save-status').hide().append('<p>Success!<p>').css({"margin":"auto",
      "width": "120px",
      "height":"50px",
      "background-color":"#0ac149",
      "color":"white",
      "font-size": "20px",
      "text-align": "center",
      "margin-top":"10px",
      "border-radius": "3px",
      "padding-top":"1px",
      "padding-bottom": "1px",
      "opacity":".7"}).fadeIn(500).delay(1000).fadeOut(500)
},
      error: function(errs) {
        {$('#save-status').append('<p>Not Quite!<p>').css('background-color','red')}
      }

    })
    console.log(sent)
})
$("#firstName").on("keyup", function (event) {
    var value = $(this).val();
    $("#firstOut").text(value);
});
$("#lastName").on("keyup", function (event) {
    var value = $(this).val();
    $("#secondOut").text(value);
});
})
