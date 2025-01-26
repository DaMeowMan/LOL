basic.forever(function () {
    music.play(music.tonePlayable(999, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(999, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
    music.play(music.tonePlayable(999, music.beat(BeatFraction.Breve)), music.PlaybackMode.LoopingInBackground)
})
