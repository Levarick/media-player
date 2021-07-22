export default class Autoplay {
  run(player) {
    player.video.muted = true;
    player.video.play();
  }
}