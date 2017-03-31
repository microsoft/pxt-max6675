namespace input {
    /**
     * Returns the temperate measured in C provided by the MAX6675 connected to a temperature probe.
     */
    //% blockId=max6675_temperature block="max6675 temperature|%pin"
    //% parts="max6675"
    //% trackArgs=0 advanced=true
    export function max6675Temperature(pin: DigitalPin): number {
        pins.setPull(pin, PinPullMode.PullNone);
        pins.digitalWritePin(pin, 0);
        basic.pause(1);
        let highByte = pins.spiWrite(0);
        let lowByte = pins.spiWrite(0);
        pins.digitalWritePin(pin, 1);

        let temp = 0;
        if (lowByte & (1 << 2)) {
            temp = -1000;
        } else {
            let value = (highByte << 5 | lowByte >> 3);
            temp = (value / 4);
        }
        return temp;
    }
}
