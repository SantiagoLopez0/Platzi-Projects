import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const playButton = document.querySelector('#buttonTogglePlay')
const MuteButton = document.querySelector('#buttonToggleMute')

const player = new MediaPlayer(
    video,
    [new AutoPlay(), new AutoPause()
],)

video.controls = true;
playButton.onclick = () => player.togglePlay()
MuteButton.onclick = () => player.toggleMute()

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js').catch(error => {
//         console.log(error.message);
//     })
// }