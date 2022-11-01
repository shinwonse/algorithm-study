const path = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M, K, X] = input.shift().split(" ");

const graph = Array.from({ length: N + 1 });
