/**
 * Functions to read temperature probe data
 */
//% color=#A80000
namespace max6675 {
    /**
     * Returns the temperate measured in C provided by the MAX6675 connected to a temperature probe.
     */
    //% blockId=max6675_temperature block="max6675 temperature|%pin"
    export function temperature(pin: DigitalPin): number {
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
