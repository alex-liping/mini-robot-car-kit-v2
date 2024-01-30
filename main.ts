function doprava_mirne () {
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 60)
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 90)
    basic.pause(1000)
    kBit.run(KBitDir.RunForward, 50)
}
function doprava () {
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 30)
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Back, 30)
    basic.pause(2000)
    kBit.motorStop(KBitMotorObs.LeftSide)
    kBit.motorStop(KBitMotorObs.RightSide)
}
function doleva_mirne () {
    kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 60)
    kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 90)
    basic.pause(1000)
    kBit.run(KBitDir.RunForward, 50)
}
function front_stop () {
    if (true) {
        kBit.run(KBitDir.RunForward, 20)
    } else {
        if (kBit.ultra() > 31) {
            kBit.run(KBitDir.RunForward, 80)
        }
    }
    if (kBit.ultra() <= 15) {
        kBit.carStop()
        couvni()
    }
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
    for (let index = 0; index < 100000; index++) {
        if (kBit.ultra() >= 16 && kBit.ultra() <= 30) {
            kBit.run(KBitDir.RunForward, 20)
            if (kBit.ultra() > 30) {
                kBit.run(KBitDir.RunForward, 80)
            }
            if (kBit.obstacle(KBitMotorObs.LeftSide) == 0) {
                doprava_mirne()
            }
            if (kBit.obstacle(KBitMotorObs.RightSide) == 0) {
                doleva_mirne()
            }
            front_stop()
        } else {
            couvni()
            if (kBit.obstacle(KBitMotorObs.LeftSide) == 1) {
                doleva()
            } else {
                if (kBit.obstacle(KBitMotorObs.RightSide) == 1) {
                    doleva()
                }
            }
            front_stop()
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
