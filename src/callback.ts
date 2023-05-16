function sum2(arr: number[]) :number {
  return arr.reduce((accumulator, current) => {
    return accumulator + current;
  });
}

function map<T, U>(f: (n: T) => U, arr: Array<T>): Array<U> {
  return arr.reduce((acc, cur) => {
    acc.push(f(cur));
    return acc;
  }, [] as Array<U>);
}

function filter<T, U>(f: (n: T) => U, arr: T[]): T[] {
  return arr.reduce((acc, cur) => {
    if(f(cur)) {
      acc.push(cur);
    }
    return acc;
  }, [] as T[]);
}

function reduce<T, U>(f: (acc: U, elem: T) => U, init: U ,arr: T[]): U {
  let acc = init;
  for(const elem of arr) {
    acc = f(acc, elem);
  }
  return acc;
}
// console.log(sum2([3, 1, 4, 1, 5, 9, 2]));  // 25
// console.log(map((elem) => elem * elem, [3, 1, 4])); // [9, 1, 16]
// console.log(filter((elem) => elem % 2 != 0, [3, 1, 4, 1, 5, 9, 2])); // [3, 1, 1, 5, 9]

console.log(reduce((acc, elem) => acc + elem, "", [3, 1, 4, 1])); // "3141"
