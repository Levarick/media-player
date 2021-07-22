export default class MediaPlayer {
  constructor({
    video,
    plugins = []
  }) {
    this.video = video;
    this.plugins = plugins;
    this._initPlugins();
  }

  _initPlugins(){
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  playListener() {
    this.video.paused
      ? this.video.play()
      : this.video.pause();
  }

  mute() {
    this.video.muted 
      ? this.video.muted = false
      : this.video.muted = true;
  }
}

