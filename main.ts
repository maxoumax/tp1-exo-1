input.onButtonPressed(Button.A, function () {
    led.unplot(Led, 0)
    Led += -1
    led.plot(Led, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(Led, 0)
    Led += 1
    led.plot(Led, 0)
})
let Led = 0
Led = 0
let del = 0
basic.forever(function () {
    if (Led == 4) {
        del += 1
    }
    if (del == 1) {
        Led += -1
        led.plot(Led, 0)
        basic.pause(1000)
        led.unplot(Led, 0)
    } else {
        Led += 1
        led.plot(Led, 0)
        basic.pause(1000)
        led.unplot(Led, 0)
    }
    if (Led == 0) {
        del += -1
    }
})
