basic.forever(function () {
    basic.showString("" + (input.compassHeading()))
    if (input.compassHeading() < 0) {
        music.playMelody("C5 B A G F E D C ", 120)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
