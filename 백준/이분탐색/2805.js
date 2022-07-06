const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');
const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);
function solution(n, m ,arr) {
  let left = 0;
  let right = arr[arr.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;
  while (left <= right) {
    let sum = 0;
    let mid = Math.floor((left + right) / 2);
    arr.forEach(v => {
      if (v - mid > 0) sum += (v - mid);
    })
    if (sum >= m) {
      if (answer <= mid) {
        answer = mid;
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(answer);
}

solution(n, m ,arr);
