import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './AutoPlay.js';

const video = document.querySelector("video");
const play = document.getElementById("play");
const mute = document.getElementById("mute");

const mediaPlayer = new MediaPlayer({video: video, plugins: [new AutoPlay()]});

play.onclick = () => mediaPlayer.playListener();
mute.onclick = () => mediaPlayer.mute();