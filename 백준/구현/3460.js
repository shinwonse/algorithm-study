const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const num = Number(input[1]);

function solution(n, num) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    let temp = num.toString(2);
    let temp2 = temp.split('').reverse().map(Number);
    for (let j = 0; j < temp2.length; j++) {
      if (temp2[j] === 1) ans.push(j);
    }
  }
  let str = '';
  for (let i = 0; i < ans.length; i++) {
    str += ans[i] + ' ';
  }
  console.log(str);
}

solution(n, num);