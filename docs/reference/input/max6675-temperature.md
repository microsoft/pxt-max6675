# max6675 temperature

Reads the temperature from a [MAX6675 converter](https://datasheets.maximintegrated.com/en/ds/MAX6675.pdf) using i2c.

```sig
input.max6675Temperature(DigitalPin.P0);
```

### Parameters

* a ``DigitalPin`` instance that represents the pin used.

### returns

* a [number](/types/number) that represents the temperature in degree Celcius

### Example

Reads the temperature and plots it on the screen.

```blocks
basic.forever(() => {
    led.plotBarGraph(input.max6675Temperature(DigitalPin.P0), 1000);
})
```

```package
max6675=github:microsoft/pxt-6675
```