"use strict";
const sum = (arr) => {
    let x = 0;
    for (const i of arr) {
        x += i;
    }
    return x;
};
const deleteMin = (arr) => {
    if (arr.length === 0)
        return;
    let min = 1e10;
    let minIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        if (minIndex === -1) {
            min = arr[i];
            minIndex = i;
            continue;
        }
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    // console.log(minIndex);
    arr.splice(minIndex, 1);
};
// console.log(sum([3, 1, 4, 1, 5, 9, 2]));  // 25
let arr = [3, 1, 4, 1, 5, 9, 2];
deleteMin(arr);
console.log(arr);
