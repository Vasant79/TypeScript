"use strict";
/**
 *
 * @param arr is of type array
 */
const array = [6, 2, 1, 9, 0, 4];
function maxValue(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log("max value : ", max);
}
maxValue(array);
