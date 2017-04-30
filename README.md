# pxt-max6675
A package to use temperature probes using the MAX6675 (see [mbed library](https://developer.mbed.org/components/MAX6675-Thermocouple/)).

https://youtu.be/Y9JUJ26OQ8U

### Example

Reads the temperature and plots it on the screen.

```blocks
basic.forever(() => {
    led.plotBarGraph(input.max6675Temperature(DigitalPin.P0), 1000);
})
```

## License
MIT

## Supported targets
* for PXT/microbit
(The metadata above is needed for package search.)

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.


```package
max6675=github:microsoft/pxt-6675
```