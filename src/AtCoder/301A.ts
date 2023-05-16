import { readFileSync } from "fs";

abstract class Reader {
  private static iter = readFileSync(0).toString().split("\n").values();
  public static line(): string {
    return this.iter.next().value;
  }
}

const [n] = Reader.line().split(" ").map(Number);
const s = Reader.line();

let t = 0;
let a = 0;
for(let i = 0; i < n; i++) {
  if(s[i] === 'A') {
    a++;
  }else {
    t++;
  }
}

if(a > t) {
  console.log("A");
} else if (a < t) {
  console.log("T");
} else {
  if(s[n-1] === 'A') {
    console.log("T");
  } else {
    console.log("A");
  }
}
