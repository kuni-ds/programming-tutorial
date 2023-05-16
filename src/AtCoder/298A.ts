import { readFileSync } from "fs";

abstract class Reader {
  private static iter = readFileSync(0).toString().split("\n").values();
  public static line(): string {
    return this.iter.next().value;
  }
}

const n = Reader.line();
const s = Reader.line();

let good = 0;
let bad = 0;

for(const i of s) {
  if(i === "o") {
    good++;
  }
  if(i === "x") {
    bad++;
  }
}
if(good >= 1 && bad === 0) {
  console.log("Yes");
} else {
  console.log("No")
}
