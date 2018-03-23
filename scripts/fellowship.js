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
$('article').eq(0).append(ul)


// (which is the second article tag on the page) find shire article tag
 // give each hobbit a class of `hobbit`

}

makeHobbits();

function keepItSecretKeepItSafe(){
  $('<div>').attr('id', 'the-ring')
  $('<div>').addClass('magic-imbued-jewlery')
  $('#the-ring').append('Frodo')
}

keepItSecretKeepItSafe();

function makeBuddies(){
// create an `aside` tag
const aside = $('<aside>');
// attach an `unordered list` of the `'buddies'` in the aside
// insert your aside as a child element of `rivendell`
}

makeBuddies();

function beautifulStranger(){
  // your answers here
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
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
