function doprava () {
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 20)
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Back, 20)
    basic.pause(2000)
    kBit.motorStop(KBitMotorObs.LeftSide)
    kBit.motorStop(KBitMotorObs.RightSide)
}
input.onButtonPressed(Button.A, function () {
    kBit.carStop()
})
function couvni () {
    kBit.carStop()
    basic.pause(500)
    kBit.run(KBitDir.RunBack, 15)
    basic.pause(1000)
    kBit.carStop()
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 100000; index++) {
        if (kBit.ultra() > 8) {
            kBit.run(KBitDir.RunForward, 30)
        } else {
            couvni()
        }
        basic.pause(500)
    }
})
function doleva () {
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Back, 20)
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 20)
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
