const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const n = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

const N = Number(n[0]);
const arr = n[1].split(' ').map(Number);

function solution(N, arr) {
  const sort = arr.sort((a, b) => a - b);
  console.log(sort[0] * sort[sort.length - 1]);
}

solution(N, arr);