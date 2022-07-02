const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input[0];
const arr = input.slice(1, );

function solution(n, arr) {
  const heap = [];
  for (let x of arr) {
    if (x === 0) {
      if (heap.length === 0) console.log(0);
      else {
        const temp = heap.sort((a, b) => b - a);
        console.log(temp[0]);
        const idx = heap.findIndex(v => v === temp[0]);
        heap.splice(idx, 1);
      }
    }
    else {
      heap.push(x);
    }
  }
}

solution(n, arr);