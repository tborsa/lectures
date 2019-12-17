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