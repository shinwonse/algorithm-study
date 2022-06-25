const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

const n = input[0];
const arr = input.slice(1, );

function solution(n, arr) {
  const stack = [];
  const result = [];
  for (let i = 0; i < n; i++) {
    switch(arr[i]) {
      case 'pop':
        result.push(stack.pop() || -1);
        break;
      case 'size':
        result.push(stack.length);
        break;
      case 'empty':
        result.push(stack[0] ? 0 : 1);
        break;
      case 'top':
        result.push(stack[stack.length - 1] || -1);
        break;

      default:
        stack.push(arr[i].split(" ")[1]);
        break;
    }
  }

  console.log(result.join("\n"));
}

solution(n, arr);