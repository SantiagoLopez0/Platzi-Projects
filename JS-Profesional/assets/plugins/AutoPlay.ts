import MediaPlayer from '../MediaPlayer.js'

class AutoPlay{

    run(player: MediaPlayer){
        player.mute()
        player.play()
    }
}

export default AutoPlay