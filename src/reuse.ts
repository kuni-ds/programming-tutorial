function log(a: number, b: number, c: number): void {
  console.log(`a=${a},b=${b},c=${c}`);
}

const log3 = log.bind(null, 3);  // 第 1 引数まで適用
// log3: (b: number, c: number) => void
log3(1, 4);  // "a=3,b=1,c=4"

const log1and5 = log.bind(null, 1, 5) // 第 2 引数まで適用
// log1and5: (c: number) => void
log1and5(9);  // "a=1,b=5,c=9"