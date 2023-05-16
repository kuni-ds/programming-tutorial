function getRandomInt(min: number, max: number): number {
  //min以上max未満の整数を生成
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

async function main(): Promise<void> {
  const x = getRandomInt(1, 100);
  console.log(x);
  const readline = createInterface({ input: stdin, output: stdout });
  let questionNum = 0;
  while(true) {
    const input = await readline.question("数値を入力してください: ");
    const a = Number(input);
    questionNum++;
    // console.log(a);
    if(a > x) { 
      console.log("a > x");
    } else if(a < x) {
      console.log("a < x");
    }else {
      console.log(`正解! 質問回数: ${questionNum}`);
      break;
    }
  }
  readline.close();
}

main();

