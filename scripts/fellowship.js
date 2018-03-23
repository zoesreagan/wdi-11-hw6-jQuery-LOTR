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
  $('<section>').attr('id', "middle-earth").appendTo($('body'))
    for (let i = 0; i < lands.length; i++) {
  // do stuff with lands- assign article tag
  $('<article>').appendTo($('#middle-earth')).append($('<h1>').text(lands[i]));
}

makeMiddleEarth();

function makeHobbits(){
// display an `unordered list` of hobbits in the shire, which is index 0 in "lands"
  $('<ul>').appendTo($('article').eq(0));
//create and unordered list for hobbit items
//print the hobbit names
//append hobbits to ul
  for (let i = 0; i < hobbits.length; i++) {
    $('<li>').text(hobbits[i]).addClass("hobbit").appendTo($('ul'))
}

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
// change the `'Gandalf'` text to `'Gandalf the White'`
//create new variable to hold Gandalf with his ordered list index
const gandalf = $('li').eq(4);
// apply the following style to the element:
//make the // background 'white', add a grey border
gandalf.css({
    'background' : 'white',
    'border' : '5px solid grey'
})
}

theBalrog();

function hornOfGondor() {
// your answers here
// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
alert("The Horn of Gondor has been blown. Boromir has been killed by the Uruk-hai!")
// Remove `Boromir` from the Fellowship
//create variable for Boromir with his li index and .remove()
const boromir = $('li').eq(8);
boromir.remove();
}

hornOfGondor();

function itsDangerousToGoAlone() {
// your answers here
// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
//create variable for Mordor with articl tag 'array' index position
const mordor = $('article').eq(2)
//create variables for both Sam & Frodo with their li index and append to Mordor
const frodo = $('li').eq(0);
const samwise = $('li').eq(1);

frodo.appendTo(mordor)
samwise.appendTo(mordor)

// add a div with an id of `'mount-doom'` and append to `Mordor`
$('<div id="mount-doom">').appendTo(mordor)
}

itsDangerousToGoAlone();

function weWantsIt() {
// your answers here
const mordor = $('article').eq(2)
// Create a div with an id of `'gollum'` and add it to Mordor
const gollum = $('<div id="gollum">')
gollum.appendTo(mordor);
// Remove `the ring` from `Frodo` and give it to `Gollum`
$('#the-ring').appendTo(gollum)
// Move Gollum into Mount Doom
gollum.appendTo($('#mount-doom'))
}

weWantsIt();

function thereAndBackAgain(){
// your answers here
// remove `Gollum` and `the Ring` from the document
gollum.remove()
// Move all the `hobbits` back to `the shire`

$("hobbits").appendTo($('article').eq(0));
}

thereAndBackAgain();
