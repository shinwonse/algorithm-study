const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);
console.log(solution(input[0]));
function solution(A) {
  let dp = [0, 1, 2];
  for(let i = 3; i <= A; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }
  return dp[A];
}