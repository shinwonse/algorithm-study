const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

const k = input[0].split(' ')[0];
const n = input[0].split(' ')[1];
const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}
arr.map(Number);
arr.sort((a, b) => a - b);

function solution(k, n, arr) {
  let left = 0;
  let right = arr[arr.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let lineNum = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

    if (lineNum >= n) {
      if (mid > answer) answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(answer);
}

solution(k, n, arr);
