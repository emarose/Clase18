const botonPlay = document.getElementById('playBtn');
const like = document.getElementById('like')

function playPause(){
  if (botonPlay.classList.contains('fa-play-circle')){
    botonPlay.style.color='red';
    botonPlay.classList.remove('fa-play-circle'); 
    botonPlay.classList.add('fa-pause-circle');
  }else{
    botonPlay.style.color='lightgreen';
    botonPlay.classList.remove('fa-pause-circle');
    botonPlay.classList.add('fa-play-circle');
  }
}

function changeColor(){
  if (like.style.color === "var(--main-color)") {
    like.style.color = "red";
  } else {
    like.style.color = "var(--main-color)";
  }
}