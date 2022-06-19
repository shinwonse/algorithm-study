const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const n = require("fs")
  .readFileSync(path)
  .toString()
  .trim()

function solution(n) {
  let result = '';
  for(let i = 0; i < n; i++) {
    for(let j = 0; j <= i; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
}

console.log(solution(n));