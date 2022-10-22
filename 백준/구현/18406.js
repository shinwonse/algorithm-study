const path = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = require("fs").readFileSync(path).toString().trim();

const n = input.length;
let left = input.slice(0, n / 2);
let right = input.slice(n / 2, n);

const leftSum = left.split("").reduce((acc, cur) => Number(acc) + Number(cur));
const rightSum = right
  .split("")
  .reduce((acc, cur) => Number(acc) + Number(cur));

if (leftSum === rightSum) console.log("LUCKY");
else console.log("READY");
