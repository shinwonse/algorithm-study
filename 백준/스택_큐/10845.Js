const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

const n = input[0];
const arr = input.slice(1, );

function solution(n, arr) {
  const queue = [];
  const result = [];
  for (let i = 0; i < n; i++) {
    switch(arr[i]) {
      case 'pop':
        result.push(queue.shift() || -1);
        break;
      case 'size':
        result.push(queue.length);
        break;
      case 'empty':
        result.push(queue[0] ? 0 : 1);
        break;
      case 'front':
        result.push(queue[0] || -1);
        break;
      case 'back':
        result.push(queue[queue.length - 1] || -1);
        break;
      default:
        queue.push(arr[i].split(" ")[1]);
        break;
    }
  }
  console.log(result.join("\n"));
}

solution(n, arr);