const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ');
const x = Number(input[0]);
const y = Number(input[1]);

function solution(x, y) {
  if(x === y){
    console.log(-1)
  }else{
    const c = Math.floor(y * 100 / x)+1
    if(c === 100){
      console.log(-1)
    }else{
      const z = Math.ceil((c * x - 100 * y) / (100 - c))
      console.log(z);
    }
  }
}

solution(x, y);

