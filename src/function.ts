// function average(num1: number, num2: number, num3: number) :number {
//   return (num1 + num2 + num3) / 3;
// }

const average = (num1: number, num2: number, num3: number) :number => {
  return (num1 + num2 + num3) / 3;
}

// function greet(firstName: string, lastName: string): void {
//   console.log(`Hello, ${firstName} ${lastName}!`);
// }

const greet = (firstName: string, lastName: string): void => {
  console.log(`Hello, ${firstName} ${lastName}!`);
}

console.log(average(3, 1, 4));
greet("Taro", "Tanaka");