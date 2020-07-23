import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const playButton = document.querySelector('#buttonTogglePlay')
const MuteButton = document.querySelector('#buttonToggleMute')

const player = new MediaPlayer(video, [
    new AutoPlay()
])

video.controls = true;
playButton.onclick = () => player.togglePlay()
MuteButton.onclick = () => player.toggleMute()