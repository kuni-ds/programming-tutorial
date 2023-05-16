import { readFileSync } from "fs";
import { assignIn } from "lodash";

abstract class Reader {
  private static iter = readFileSync(0).toString().split("\n").values();
  public static line(): string {
    return this.iter.next().value;
  }
}

const [n] = Reader.line().split(" ").map(Number);
let a = Reader.line().split(" ").map(Number);

for(let i = 0; i < a.length-1; i++) {
  if(Math.abs(a[i] - a[i+1]) > 1) {
    if(a[i] < a[i+1]) {
      // console.log(i);
      for(let j = a[i+1]-1; j >= a[i]+1; j--) {
        // console.log(j);
        a.splice(i+1, 0, j);
      }
    } else {
      for(let j = a[i+1]+1; j <= a[i]-1; j++) {
        a.splice(i+1, 0, j);
      }
    }
  }
}

let ans = "";

for(const i of a) {
  ans += i + " ";
}
console.log(ans);