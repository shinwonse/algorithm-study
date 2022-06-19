const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const n = require("fs")
  .readFileSync(path)
  .toString()
  .trim()

function solution(n) {
  let str = '';
  for(let i = n; i >= 0; i--) {
    for(let j = 0; j < i; j++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}

solution(n);