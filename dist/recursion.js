"use strict";
function factorial(n) {
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}
function fib(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    return fib(n - 1) + fib(n - 2);
}
const mod = 1e6;
function pow(x, n) {
    if (n == 1)
        return x;
    if (n % 2 == 0) {
        const half = pow(x, n / 2);
        return half * half % mod;
    }
    else {
        return pow(x, n - 1) * pow(x, 1) % mod;
    }
}
// console.log(pow(2, 100));
console.log(pow(2, 1000000000000000)); // 109376
// console.log(factorial(10));  // 3628800
// console.log(fib(0));   // 0
// console.log(fib(1));   // 1
// console.log(fib(10));  // 55
