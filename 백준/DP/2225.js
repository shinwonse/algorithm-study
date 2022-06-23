const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const [a, b] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number);


function solution(N, K) {
  let dy = Array.from({ length: b + 1 }, () =>  0 );
  console.log(dy[0][0]);

  for(let i = 0; i <= N; i++){
    dy[1][i] = 1;
  }
}


solution(a, b);