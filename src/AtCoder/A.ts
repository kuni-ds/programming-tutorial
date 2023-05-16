import { readFileSync } from "fs";

abstract class Reader {
  private static iter = readFileSync(0).toString().split("\n").values();
  public static line(): string {
    return this.iter.next().value;
  }
}

const [a] = Reader.line().split(" ").map(Number);  // 1行読む
const [b, c] = Reader.line().split(" ").map(Number);
const s = Reader.line();

console.log(a + b + c);
console.log(s);
