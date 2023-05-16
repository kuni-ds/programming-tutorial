import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

function displayBoard(board: number[][], size: number): void {
  let deli = "+-+";
  for(let i = 0; i < size; i++) deli += "-";
  deli += "+";
  let index_w = "| |"
  for(let i = 1; i <= size; i++) index_w += String(i);
  index_w += "|";
  console.log(deli);
  console.log(index_w);
  console.log(deli);
  for(let i = 0; i < size; i++) {
    let outputLine = "|";
    outputLine += String.fromCharCode('A'.charCodeAt(0) + i);
    outputLine += "|";
    for(let j = 0; j < size; j++) {
      if(board[i][j] === 0) {
        outputLine += ".";
      } else {
        outputLine += "O";
      }
    }
    outputLine += "|";
    console.log(outputLine);
  }
  console.log(deli);
}

function pushBotton(board: number[][], h: number, w: number, size: number) {
  const dh = [0, 1, 0, -1, 0];
  const dw = [0, 0, 1, 0, -1];
  for(let i = 0; i < dh.length; i++) {
    const target_h = h + dh[i];
    const target_w = w + dw[i];
    // console.log(target_h, target_w);
    if(0 <= target_h && target_h < size && 0 <= target_w && target_w < size) {
      // console.log(target_h, target_w);
      board[target_h][target_w] += 1;
      board[target_h][target_w] %= 2;
    }
  }
}

function initBoard(size: number): number[][] {
  let elem = [];
  for(let i = 0; i < size; i++) elem.push(1);
  let board = [];
  for(let i = 0; i < size; i++) board.push(structuredClone(elem));
  return structuredClone(board);
}

function generateClearableBoard(size: number): number[][] {
  //クリア可能な盤面を生成
  let board = initBoard(size);
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      if(Math.random() < 0.2) {
        pushBotton(board, i, j, size);
        // console.log(i, j);
      }
    }
  }
  return structuredClone(board);
}

function isClear(board: number[][]): boolean {
  return board.every((element) => {
    return element.every((elem) => {
      return elem === 1;
    })
  })
}

async function main(): Promise<void> {
  const readline = createInterface({ input: stdin, output: stdout });
  const input = await readline.question("盤面のサイズは？(min: 1, max: 9): ");
  const size = Number(input);
  if(!(0 < size && size <= 9)) {
    console.log("無効な入力値です。");
    console.log("最初からやり直してください。");
    readline.close();
    return;
  }
  let board = generateClearableBoard(size);
  //displayBoard(board, size);
  //bit全探索
  let solutionBit = -1;
  for(let bit = 0; bit < (1<<size*size); bit++) {
    // console.log(bit);
    let copyBoard = structuredClone(board);
    for(let i = 0; i < size*size; i++) {
      if(bit & (1<<i)) {
        const indexH = Math.floor(i / size);
        const indexW = i % size;
        pushBotton(copyBoard, indexH, indexW, size);
      }
    }
    if(isClear(copyBoard)) {
      solutionBit = bit;
      break;
    }
  }
  //出力
  if(solutionBit === -1) {
    console.log("Cleared Board");
  } else {
    for(let i = 0; i < size*size; i++) {
      if(solutionBit & (1<<i)) {
        const indexHTemp = Math.floor(i / size);
        const indexH = String.fromCharCode('A'.charCodeAt(0) + indexHTemp);
        const indexW = (i % size) + 1;
        console.log(`${indexH}${indexW}`);
      }
    }
  }
  

  const startTime = performance.now();
  while(true) {
    displayBoard(board, size);
    const input = await readline.question("押したいボタンの座標を入力してください: ");
    const h_tmp = input[0];
    const h = h_tmp.charCodeAt(0) - 'A'.charCodeAt(0);
    const w = Number(input[1]) - 1;
    //バリデーション
    if(!(0 <= h && h < size && 0 <= w && w < size)) {
      console.log("無効な入力値です");
      continue;
    }
    //押したボタンを元に反転
    pushBotton(board, h, w, size);
    //クリア判定
    if(isClear(board)) {
      const endTime = performance.now();
      const clearTime = Math.floor((endTime - startTime) / 1000);
      displayBoard(board, size);
      console.log(`クリア!! タイム: ${clearTime}秒`);
      break;
    }
  }
  readline.close();
}

main();