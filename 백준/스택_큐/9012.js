const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

const t = input[0];
const arr = input.slice(1, );

function solution(t, arr) {
  let answer = '';
  let stack = [];
  for (let i = 0; i < t; i++) {
    let splited = arr[i].split('');
    stack.push(splited[0]);
    for (let j = 1; j < splited.length; j++) {
      if (stack[stack.length - 1] === '(' && splited[j] === ')') {
        stack.pop();
      } else {
        stack.push(splited[j]);
      }
    }
    if (stack.length === 0) {
      answer += 'YES' + '\n';
    } else {
      answer += 'NO' + '\n';
    }
    stack = [];
  }
  console.log(answer);
}

solution(t, arr);