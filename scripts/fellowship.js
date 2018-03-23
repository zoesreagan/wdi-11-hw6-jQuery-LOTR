console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  const section = $('<section>').attr('id', "middle-earth")
    for (let i = 0; i < lands.length; i++) {
  // do stuff with lands- assign article tag
      const article = $('<article>');
      section.append(article);
      const h1 = $('<h1>').text(lands[i]);
      article.append(h1);
    }
  $('body').append(section)
}

makeMiddleEarth();

function makeHobbits(){
// display an `unordered list` of hobbits in the shire
const ul = $('<ul>')
//create li items
  for (let i = 0; i < hobbits.length; i++) {
    const li = $('<li>').text(hobbits[i]);
    ul.append(li)
}
$('article').eq(0).append(ul).addClass('hobbit')
// (which is the second article tag on the page) find shire article tag
// give each hobbit a class of `hobbit`
}//adding class???

makeHobbits();

function keepItSecretKeepItSafe(){
  $('<div>').attr('id', 'the-ring').addClass('magic-imbued-jewlery').appendTo('li').eq(0)
}

keepItSecretKeepItSafe();

function makeBuddies(){
// create an `aside` tag
$('<aside>').append($('<ul>')).appendTo($('article').eq(1))
// attach an `unordered list` of the `'buddies'` in the aside
//need to loop through array of "buddies" and display the text
for(let i = 0; i <buddies.length; i++) {
  $('<li>').text(buddies[i]).appendTo($('ul').eq(1))
  } // insert your aside as a child element of `rivendell`
}
makeBuddies();

function beautifulStranger(){
  // your answers here
  //print element in list element corresponding to Strider; update using .text
  $('li').eq(7).text("Aragorn")
}

beautifulStranger();

function leaveTheShire(){
  // assemble the `hobbits` and move them to `rivendell`
  // your answers here
  //append unordered list to Lands-Rivendell which is index one of article tag "array"
  $('ul').appendTo($('article').eq(1))
}

leaveTheShire();

function forgeTheFellowship() {
// your answers here
// create a new div called `'the-fellowship'` within `rivendell`
  $('<div>').attr('id', 'the-fellowship').text("The Fellowship of the Ring").appendTo($('article').eq(1))
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
//create new variable to hold array of all characters using both unordered lists
  const fellowship = $('ul');
//append contents of both unorderd lists to fellowship ID
  fellowship.appendTo($('#the-fellowship'))
//now print members of Fellowship and after each
//character is added make an alert that " // have joined your party"
    for(let i = 0; i <$('li').length; i++) {
      alert($('li').eq(i).text() + " has joined your party.")
    }
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
}

theBalrog();

function hornOfGondor() {
  // your answers here
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();
