import { readFileSync } from "fs";
class Reader {
    static line() {
        return this.iter.next().value;
    }
}
Reader.iter = readFileSync(0).toString().split("\n").values();
function main() {
    Reader.line();
    const as = Reader.line().split(" ").map(Number);
    const bs = Reader.line().split(" ").map(Number);
    const sum = bs.map((b) => as[b - 1]).reduce((acc, a) => acc + a);
    console.log(sum);
}
main();
