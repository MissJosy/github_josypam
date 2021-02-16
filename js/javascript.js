var item = document.getElementById("musika");
var music = new Audio('../assets/theprettyones.mp3');

item.addEventListener("mouseover", playMusic, false);
item.addEventListener("mouseout", stopMusic, false);

function playMusic() {
   music.play();
}

function stopMusic() {
   music.stop();
}