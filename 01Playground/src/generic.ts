/**
 * fn is of type generic -- meaning is of any type
 * <T> represent generic type
 * T[] represent array of generic type
 *
 * person using the function defines what type the function will cator to
 */

function printArray<T>(arr: T[]) {
  console.log(arr);
}

printArray<number>([1, 2, 3, 4]);
printArray<string>(["vasant", "singh", "negi"]);
printArray<boolean>([true, false]);
// printArray<boolean>(["hi", 1, 2]); -- gives type err as argument is not of type boolean
