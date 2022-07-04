const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
const n = input[0];
const arrN = input[1].split(' ');
const m = input[2];
const arrM = input[3].split(' ');

function solution(n, arrN, m, arrM) {
  const answer = [];
  const map = new Map();
  arrN.forEach(v => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  });
  arrM.forEach(v => answer.push(map.get(v) || 0));
  console.log(answer.join(' '));
}

solution(n, arrN, m, arrM);
