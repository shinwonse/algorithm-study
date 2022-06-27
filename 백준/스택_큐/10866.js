const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

const n = input[0];
const arr = input.slice(1, );

function solution(n, arr) {
  const deque = [];
  const result = [];
  for (let i = 0; i < n; i++) {
    switch(arr[i].split(" ")[0]) {
      case 'push_front':
        deque.unshift(arr[i].split(" ")[1]);
        break;
      case 'push_back':
        deque.push(arr[i].split(" ")[1]);
        break;
      case 'pop_front':
        result.push(deque.shift() || -1);
        break;
      case 'pop_back':
        result.push(deque.pop() || -1);
        break;
      case 'size':
        result.push(deque.length);
        break;
      case 'empty':
        deque.length === 0 ? result.push(1) : result.push(0);
        break;
      case 'front':
        result.push(deque[0] || -1);
        break;
      case 'back':
        result.push(deque[deque.length - 1] || -1);
        break;
    }
  }
  console.log(result.join('\n'));
}

solution(n, arr);
