const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const n = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(n) {
  const arr = [];
  let sum = 0;
  let min = 100;
  for (let x of n) {
    if (x % 2 === 1) arr.push(x);
  }
  if (arr.length === 0) console.log(-1);
  else {
    sum = arr.reduce((acc, cur) => acc + cur);
    for (let y of arr) {
      if (y <= min) min = y;
    }
    console.log(sum);
    console.log(min);
  }
}

solution(n);