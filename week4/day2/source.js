<link src="script.js"></link>

<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>

let thing = document.getElementById("siteSub")

let images = document.getElementsByTagName("img");

for( let image of images ) {
  image.src = 'new';
  image.srcset = 'new'
}

let log = document.createElement("div");  // Create a new <div> element
log.id = "debuglog";                  // Set the HTML id attribute on it
log.innerHTML = "<h1>Debug Log</h1>"; // Define initial content
document.body.appendChild(log); 

document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

// JQUERY

$(document).ready()

$().click(func);
$().hover();

$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
});

// build html element
var $container = $('#pets-container');
$container.append('<article class="pet">Bongo</article>');

// build using data

// GOAL: Append the pets to the section

var pets = [
  {
  	name: 'Dingo',
    type: 'dog',
    age: 1
  },
  {
  	name: 'Kongo',
    type: 'snake',
    age: 3
  },
  {
  	name: 'Meowngo',
    type: 'cat',
    age: 2
  },
  {
  	name: 'Bongo',
    type: 'dog',
    age: 2
  }
]

var $container = $('#pets-container');

pets.forEach(function(pet) {

	// The commented out code works just as well
	// var desc = pet.name + " is " + pet.age + " years old."
	// var $pet = $('<article>').text(desc).addClass('pet').addClass(pet.type).appendTo($container);

	// Easier to read version below (not using semicolon to terminate the line until the end. It's still behaving like it's a single line!)
  $('<article>')
   .append(pet.name)
   .append(' is ')
   .append(pet.age)
   .append(' years old.')
   .addClass('pet')
   .addClass(pet.type)
   .appendTo($container)
});

// click and append

$('.speak-btn').on('click', function(evt) {
	var $btn = $(this);
  $btn.closest('.speaker').find('.speak').append('hey! ');
  // The below strategy also works but when there are two farters on the page, it modifies both. There our code is not "contained" or "scoped" to the specific component in question.
  // $('.farts').append('fart! '); 
});


// query selector

document.querySelector(selectors);