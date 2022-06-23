const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const N = input.shift();

function solution(N, input) {
  const dp = Array.from({ length: N + 1 }, () => new Array(4).fill(0));
  dp[1][1] = 
  for(let i = 4; i < N + 1; i++) {
    dp[i][1]
  }
}

solution(N, input);