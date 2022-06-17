const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const [n, sequence] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
const seq = sequence.split(' ').map(Number);

function solution(n, seq) {
  const DP = Array.from({ length: n + 1}, () => 0);

  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= i; j++) {
      DP[i] = Math.max(DP[i], DP[i - j] + seq[j - 1])
    }
  }
  return DP[n]
}

console.log(solution(n, seq));