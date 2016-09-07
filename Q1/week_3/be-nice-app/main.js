var niceArray=[
  "Too bad, life is hard",
  "Grow up",
  "Then you came to the wrong place",
  "Nah.....I'm good",
  "You suck",
];

function generate() {
  return Math.floor(Math.random()*niceArray.length);
}

$('button').click(function()  {
  $('#result h2').html(niceArray[generate()]);
})
