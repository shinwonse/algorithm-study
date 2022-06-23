const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const n = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

const N = n[0];
const arr = n[1].split(' ').map(Number);

function solution(N, arr) {
  const max = arr.sort((a, b) => b - a)[0];
  let sum = 0;
  for (let x of arr) {
    sum += x / max * 100;
  }
  console.log(sum / Number(N));
}

solution(N, arr);