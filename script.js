console.log("Welcome to Spotify");
//Variable Initializing
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let myProgressBar = document.getElementById("myProgressBar");
let songs = [
  {
    songnames: "Salam-e-Ishq",
    filePath: "sogs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songnames: "Salam-e-Ishq",
    filePath: "sogs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songnames: "Salam-e-Ishq",
    filePath: "sogs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songnames: "Salam-e-Ishq",
    filePath: "sogs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songnames: "Salam-e-Ishq",
    filePath: "sogs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songnames: "Salam-e-Ishq",
    filePath: "sogs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songnames: "Salam-e-Ishq",
    filePath: "sogs/1.mp3",
    coverPath: "covers/1.jpg",
  },
];

//audioElement.play();
//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    gif.style.opacity=0;
  }
});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //Update Seekbar
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;
});
