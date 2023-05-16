import { readFileSync } from "fs";

abstract class Reader {
  private static iter = readFileSync(0).toString().split("\n").values();
  public static line(): string {
    return this.iter.next().value;
  }
}

const N = Number(Reader.line());
let A = Reader.line().split(" ").map(Number);
console.log(A);
// var A = arr.split(" ").map(Number);  //分解
var array = [];

for (let i = 0; i < N-1; i++) {
  if (A[i] < A[i+1]) {
    var dif = A[i+1] - A[i];
    for (var j = 0; j < dif; j++) {
      array.push(A[i] + j);
    }
  } else {
    var dif = A[i] - A[i+1];
    for (var k = 0; k < dif; k++) {
      array.push(A[i] - k);
    }
  }
}

array.push(A[N-1]);

console.log(array.join(" "));