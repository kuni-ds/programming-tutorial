import { readFileSync } from "node:fs";
import { stdin } from "node:process";
// stdin.fd = 標準入力のファイルディスクリプタ (常に 0)
const input = readFileSync(stdin.fd).toString();
console.log(input.length);
