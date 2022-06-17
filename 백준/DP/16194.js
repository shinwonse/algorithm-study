const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const [n, sequence] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
const seq = sequence.split(' ').map(Number);

function solution(n, seq) {
  const dp = [0, ...seq];
  for(let i = 0; i < dp.length; i++) {
    for(let j = 0; j < i; j++){
      dp[i] = Math.min(dp[i], dp[i - j] + dp[j]);
    }
  }
  return dp[n];
}

console.log(solution(n, seq));