const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ");

function solution(input) {
  let answer = [];
  let map = new Map();
  input.forEach(element => {
    if(map.has(element)) {
      map.set(element, map.get(element) + 1);
    }
    else {
      map.set(element, 1);
    }
  });
  map.forEach((value) => {
    if(value > 1) {
      answer.push(value);
    }
  });
  if(answer.length === 0) answer.push(-1);
  return answer;
}
console.log(solution(input));