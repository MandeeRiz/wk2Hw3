let buttEl = document.querySelector(".button")
buttEl.addEventListener("click", startTimer)

startTimer = () => {
let mins = 00
let secs = 00

}





/*let startTime;
let limit;
let timer;


  document.getElementById("button").addEventListener("click", clickBut);

function clickBut() {

  startTime = 00;

  limit = parseInt(document.getElementById("input").value);

  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

function updateTime() {
  var currentTime = new Date();

  let elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  let minutes = Math.floor(elapsed / 60);
  let seconds = Math.floor(elapsed % 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("clock").innerHTML = minutes + ":" + seconds;

  if (minutes >= limit) {
    document.getElementById("clock").className = "red";
  } else {
    document.getElementById("clock").className = "blue";
  }

}*/