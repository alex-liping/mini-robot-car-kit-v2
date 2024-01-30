function doprava_mirne () {
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 40)
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 60)
}
function doprava () {
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 30)
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Back, 30)
    basic.pause(2000)
    kBit.motorStop(KBitMotorObs.LeftSide)
    kBit.motorStop(KBitMotorObs.RightSide)
}
function doleva_mirne () {
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 40)
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 60)
}
input.onButtonPressed(Button.A, function () {
    kBit.carStop()
})
function couvni () {
    kBit.carStop()
    basic.pause(500)
    kBit.run(KBitDir.RunBack, 20)
    basic.pause(1000)
    kBit.carStop()
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1000; index++) {
        if (kBit.ultra() > 10) {
            kBit.run(KBitDir.RunForward, 50)
            if (kBit.obstacle(KBitMotorObs.LeftSide) == 0) {
                doprava_mirne()
            }
            if (kBit.obstacle(KBitMotorObs.RightSide) == 0) {
                doleva_mirne()
            }
        } else {
            couvni()
            if (kBit.obstacle(KBitMotorObs.LeftSide) == 1) {
                doleva()
            } else {
                if (kBit.obstacle(KBitMotorObs.RightSide) == 1) {
                    doleva()
                }
            }
        }
    }
})
function doleva () {
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Back, 30)
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 30)
    basic.pause(2000)
    kBit.motorStop(KBitMotorObs.LeftSide)
    kBit.motorStop(KBitMotorObs.RightSide)
}
let strip = neopixel.create(DigitalPin.P5, 24, NeoPixelMode.RGB)
irRemote.connectInfrared(DigitalPin.P16)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(500)
let range = strip.range(6, 6)
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
