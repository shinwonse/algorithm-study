const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const n = require("fs")
  .readFileSync(path)
  .toString()
  .trim()

// function solution(n) {
//   let str = '';
//   for(let i = n; i >= 0; i--) {
//     for(let j = 0; j < n - i; j++) {
//       str += ' ';
//     }
//     for(let k = 0; k < i; k++) {
//       str += '*';
//     }
//     str += '\n';
//   }
//   console.log(str);
// }

// solution(n);

function solution(n) {
  let value = "*".repeat(Number(n)).split("");
  console.log(value.join(""));
  for (let i = 0; i < Number(n) - 1; i++) {
	  value[i] = " ";
	  console.log(value.join(""));
  }
}

solution(n);