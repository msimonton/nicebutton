$('document').ready(function()  {
  $.ajax({
    url:'https://www.reddit.com/me/m/crypto.json',
    error: function(err) {console.error(err)},
    method: "GET",
    success: function(dataOne) {
    var blah= dataOne.data.children
    for(key in bl
    console.log(i)
    }
    })
})
