import { readFileSync } from "fs";

abstract class Reader {
  private static iter = readFileSync(0).toString().split("\n").values();
  public static line(): string {
    return this.iter.next().value;
  }
}

const [n, a, b] = Reader.line().split(" ").map(Number);
const c = Reader.line().split(" ").map(Number);

const result = a + b;
const ans = c.findIndex((elem) => {
  return elem === result;
});

console.log(ans+1);

// console.log(n, a, b);
// console.log(c);