class MediaPlayer{
  media: HTMLMediaElement
  plugins: Array<any>

  constructor(media: HTMLMediaElement, plugins: Array<any> = []){
    this.media = media
    this.plugins = plugins

    this.initPlugins()
  }

  private initPlugins(){
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }

  play(){
    this.media.play()
  }

  pause(){
    this.media.pause()
  }

  mute(){
    this.media.muted = true
  }

  unmute(){
    this.media.muted = false
  }

  togglePlay(){
    this.media.paused ? this.play() : this.pause()
  }

  toggleMute(){
    this.media.muted ? this.unmute() : this.mute()
  }
}

export default MediaPlayer;