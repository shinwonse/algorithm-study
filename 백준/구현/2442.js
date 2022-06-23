const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const n = require("fs")
  .readFileSync(path)
  .toString()
  .trim()

function solution(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    str += ' '.repeat(n - i) + '*'.repeat(i * 2 - 1) + '\n';
  }
  console.log(str);
}
solution(n);
