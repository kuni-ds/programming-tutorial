import { readFileSync } from "fs";

abstract class Reader {
  private static iter = readFileSync(0).toString().split("\n").values();
  public static line(): string {
    return this.iter.next().value;
  }
}

const [h, w] = Reader.line().split(" ").map(Number);
let a = [] as String[];
for(let i = 0; i < h; i++) {
  const tmp = Reader.line();
  a.push(tmp);
}
let b = [] as String[];
for(let i = 0; i < h; i++) {
  const tmp = Reader.line();
  b.push(tmp);
}
let ans = false;
for(let i = 0; i < h; i++) {
  for(let j = 0; j < w; j++) {
    let isSame = true;
    for(let n = 0; n < h; n++) {
      for(let m = 0; m < w; m++) {
        if(a[n][m] !== b[(n+i)%h][(m+j)%w]) {
          isSame = false;
          break;
        }
      }
      if(isSame === false) break;
    }
    if(isSame === true) {
      ans = true;
      break;
    }
  }
  if(ans === true) break;
}

if(ans) {
  console.log("Yes");
} else {
  console.log("No")
}

// console.log(a[0][0]);