const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const [T, ...numbers] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(T, numbers) {
  const DP = Array.from({ length: T}, () => 0);
  DP[1] = 1;
  DP[2] = 2;
  DP[3] = 4;

  for(let i = 4; i <= 11; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2] + DP[i - 3]);
  }

  for(let i = 0; i < T; i++) {
    console.log(DP[numbers[i]])
  }
}

solution(T, numbers);
