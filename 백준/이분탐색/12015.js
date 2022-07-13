const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

function binarySearch(list, left, right, target) {
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (list[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

function solution(n, arr) {
  let temp = [];
  temp.push(arr[0]);
  for (let i = 1; i < n; i++) {
    if (temp[temp.length - 1] < arr[i]) {
      temp.push(arr[i]);
    } else {
      let idx = binarySearch(temp, 0, temp.length - 1, arr[i]);
      temp[idx] = arr[i];
    }
  }
  console.log(temp.length);
}

solution(n, arr);
