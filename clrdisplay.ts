/**
 * Use this file to define custom functions and blocks. 
 * Read more at https://makecode.adafruit.com/blocks/custom
 */

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace clr_display {
    /**
     * TODO: describe your function here
     * @param id of the I2c address - at clr we use typically use 10
     * @param message string to write to the display - a ^ will clear the screen
     * @return display the message on the lcd
     */
    //% block
    export function lcd_write_text(id: number, message: string): number {
		for (let index = 0; index <= s.length - 1; index++) {
			pins.i2cWriteNumber(id, s.charCodeAt(n), NumberFormat.Int8LE, false)
		}
    }

}