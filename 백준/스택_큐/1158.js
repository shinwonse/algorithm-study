const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const n = input[0];
const k = input[1];

function solution(n, k) {
  const queue = [];
  const result = [];
  for (let i = 0; i < n; i++) {
    queue.push(i + 1);
  }
  let count = 1;
  while (queue.length) {
    const shiftItem = queue.shift();
    if (count % k === 0) {
      result.push(shiftItem);
    } else {
      queue.push(shiftItem);
    }
    count++;
  }
  console.log(`<${result.join(", ")}>`)
}

solution(n, k);