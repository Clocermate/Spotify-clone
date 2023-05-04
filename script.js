console.log("Welcome to Spotify");
//Variable Initializing
let songIndex = 0;
let audioElement = new Audio("songs/Faded-Love.mp3");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let myProgressBar = document.getElementById("myProgressBar");
let songs = [
  {
    songnames: "Faded Love",
    filePath: "sogs/Faded-Love.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songnames: "Bones",
    filePath: "sogs/Bones.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songnames: "Let me down slowly",
    filePath: "sogs/Let me down slowly.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songnames: "Night Changes",
    filePath: "sogs/Night-Changes.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songnames: "At My Worst",
    filePath: "sogs/At My Worst.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songnames: "In the name of Love[Nightcore]",
    filePath: "sogs/In the name of Love[Nightcore].mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songnames: "Alone",
    filePath: "sogs/Alone.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songnames: "Stay",
    filePath: "sogs/Stay.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songnames: "Tokyo-Drift",
    filePath: "sogs/Tokyo-Drift.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songnames: "Unstoppable",
    filePath: "sogs/Unstoppable.mp3",
    coverPath: "covers/10.jpg",
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
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
