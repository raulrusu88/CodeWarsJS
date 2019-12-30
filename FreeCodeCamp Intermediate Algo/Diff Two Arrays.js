// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
//In other words, return the symmetric difference of the two arrays.
// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .sort()
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
