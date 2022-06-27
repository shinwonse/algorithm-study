const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

const t = input[0];
const arr = input.splice(1, );

// function solution(t, arr) {
//   for (let i = 0; i < t; i++) {
//     const answer = [];
//     const newArr = arr[i].split(" ");
//     for (let j = 0; j < newArr.length; j++) {
//       const reverseArr = newArr[j].split("").reverse().join('');
//       answer.push(reverseArr);
//     }
//     console.log(answer.join(' '));
//   }
// }

// solution(t, arr);

function solution(t, arr) {
  for (let i = 0; i < t; i++) {
    let words = arr[i].split(" ");
    let answer = words.map((word) => word.split("").reverse().join("")).join(" ");
    console.log(answer);
  }
}

solution(t, arr);