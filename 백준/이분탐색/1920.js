const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
const n = Number(input[0]);
const arrN = input[1].split(' ').map(Number);
const m = Number(input[2]);
const arrM = input[3].split(' ').map(Number);
arrN.sort((a, b) => a - b);

function solution(n, arrN, m, arrM) {
  const answer = [];
  arrM.forEach(v => {
    let left = 0;
    let right = arrN.length - 1;
    let res = false;
    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      if (v < arrN[mid]) {
        right = mid - 1;
      } else if (v > arrN[mid]) {
        left = mid + 1;
      } else {
        res = true;
        break;
      }
    }
    if (res === true) {
      answer.push(1);
    } else answer.push(0);
  })
  console.log(answer.map(String).join('\n'));
}

solution(n, arrN, m, arrM);