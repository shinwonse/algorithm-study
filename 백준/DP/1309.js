const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const n = require("fs")
  .readFileSync(path)
  .toString()
  .trim()

function solution(n) {
  let dp = Array.from({ length: n + 1}, () => 0);
  
}

solution(Number(n));