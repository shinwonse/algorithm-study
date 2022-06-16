function solution (){
  const fs = require('fs');
  const input = fs.readFileSync("예제.txt").toString().trim().split(" ");

  const a = parseInt(input[0]);
  const b = parseInt(input[1]);

  return a + b;
}