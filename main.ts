function doprava_mirne () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 50)
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 100)
    range = strip.range(4, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Orange))
}
function doprava () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 30)
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Back, 30)
    range = strip.range(3, 3)
    range.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(2000)
    kBit.motorStop(KBitMotorObs.LeftSide)
    kBit.motorStop(KBitMotorObs.RightSide)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
function doleva_mirne () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 50)
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 100)
    range = strip.range(13, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Orange))
}
input.onButtonPressed(Button.A, function () {
    kBit.carStop()
})
function couvni () {
    range = strip.range(18, 1)
    range.showColor(neopixel.colors(NeoPixelColors.White))
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(500)
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.InBackground)
    kBit.run(KBitDir.RunBack, 30)
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 3272, 3155, 255, 255, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.pause(100)
    kBit.carStop()
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10000; index++) {
        if (kBit.ultra() >= 12 && kBit.ultra() <= 33) {
            kBit.carStop()
            kBit.run(KBitDir.RunForward, 30)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            range = strip.range(6, 6)
            range.showColor(neopixel.colors(NeoPixelColors.Blue))
            if (kBit.obstacle(KBitMotorObs.LeftSide) == 0) {
                doprava_mirne()
            }
            if (kBit.obstacle(KBitMotorObs.RightSide) == 0) {
                doleva_mirne()
            }
        } else if (kBit.ultra() >= 34) {
            kBit.carStop()
            kBit.run(KBitDir.RunForward, 90)
            range = strip.range(6, 6)
            range.showColor(neopixel.colors(NeoPixelColors.Blue))
            if (kBit.obstacle(KBitMotorObs.LeftSide) == 0) {
                doprava_mirne()
            }
            if (kBit.obstacle(KBitMotorObs.RightSide) == 0) {
                doleva_mirne()
            }
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 3272, 3155, 255, 255, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            basic.pause(200)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            kBit.carStop()
            couvni()
            nah_cislo = randint(0, 1)
            basic.pause(500)
            if (nah_cislo == 0) {
                if (kBit.obstacle(KBitMotorObs.LeftSide) == 1) {
                    doleva()
                } else {
                    if (kBit.obstacle(KBitMotorObs.RightSide) == 1) {
                        doprava()
                    }
                }
            } else {
                if (kBit.obstacle(KBitMotorObs.RightSide) == 1) {
                    doprava()
                } else {
                    if (kBit.obstacle(KBitMotorObs.LeftSide) == 1) {
                        doleva()
                    }
                }
            }
        }
    }
})
function doleva () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Back, 30)
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 30)
    range = strip.range(12, 3)
    range.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(2000)
    kBit.motorStop(KBitMotorObs.LeftSide)
    kBit.motorStop(KBitMotorObs.RightSide)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
let nah_cislo = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.InBackground)
strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
irRemote.connectInfrared(DigitalPin.P16)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(500)
range = strip.range(6, 6)
range.showColor(neopixel.colors(NeoPixelColors.Blue))
basic.pause(500)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . # #
    . . . . .
    . # # # .
    `)
basic.pause(500)
basic.forever(function () {
	
})
