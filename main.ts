function blink1 (color: number) {
    for (let index = 0; index <= 60; index++) {
        strip.setPixelColor(index, color)
        index += 2
    }
    strip.show()
    basic.pause(500)
    strip.clear()
    strip.show()
    basic.pause(500)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "AlarmOn") {
        AlarmOn = true
    }
    if (receivedString == "AlarmOf") {
        AlarmOn = false
    }
})
let strip: neopixel.Strip = null
let AlarmOn = false
AlarmOn = false
strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
radio.setGroup(1)
basic.forever(function () {
    if (AlarmOn) {
        blink1(neopixel.colors(NeoPixelColors.Red))
    }
})
