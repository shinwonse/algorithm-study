const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

function solution(n, arr) {
  let left = 0;
  let right = n - 1;
  let sum = 0;
  let answer = Number.MAX_SAFE_INTEGER;
  let answerSet = new Array(2).fill(0);
  while (left !== right) {
    sum = arr[left] + arr[right];
    if (Math.abs(sum) < answer) {
      answer = Math.abs(sum);
      answerSet[0] = arr[left];
      answerSet[1] = arr[right];
    }
    if (sum === 0) {
      break;
    } else if (sum > 0) {
      right -= 1;
    } else if (sum < 0) {
      left += 1;
    }
  }
  console.log(answerSet.join(' '));
}

solution(n, arr);
