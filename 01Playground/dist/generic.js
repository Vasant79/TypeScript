"use strict";
/**
 * fn is of type generic -- meaning is of any type
 * <T> represent generic type
 * T[] represent array of generic type
 *
 * person using the function defines what type the function will cator to
 */
function printArray(arr) {
    console.log(arr);
}
printArray([1, 2, 3, 4]);
printArray(["vasant", "singh", "negi"]);
printArray([true, false]);
printArray(["hi", 1, 2]);
