import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import AdsPlugin from './plugins/Ads/index'

const video: HTMLMediaElement = document.querySelector('video')
const playButton: HTMLElement = document.querySelector('#buttonTogglePlay')
const MuteButton: HTMLElement = document.querySelector('#buttonToggleMute')

const player = new MediaPlayer(
    video,
    [new AutoPlay(), new AutoPause(), new AdsPlugin()]
)

video.controls = true;
playButton.onclick = () => player.togglePlay()
MuteButton.onclick = () => player.toggleMute()

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js').catch(error => {
//         console.log(error.message);
//     })
// }