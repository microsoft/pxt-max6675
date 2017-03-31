basic.forever(() => {
    led.plotBarGraph(input.max6675Temperature(DigitalPin.P0), 1000);
})