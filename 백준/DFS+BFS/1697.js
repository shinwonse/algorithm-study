const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ');
const n = Number(input[0]);
const k = Number(input[1]);

const solution = (n, k) => {
  const queue = [[n, 0]];
  const visited = Array(100001).fill(false);

  while (queue.length) {
    const [pos, t] = queue.shift();
    if (visited[pos]) {
      continue;
    }

    visited[pos] = true;
    if (pos === k) {
      console.log(t);
      break;
    }

    if (pos * 2 <= 100000) {
      queue.push([pos * 2, t + 1]);
    }

    if (pos + 1 <= 100000) {
      queue.push([pos + 1, t + 1]);
    }

    if (pos - 1 >= 0) {
      queue.push([pos - 1, t + 1]);
    }
  }
}

solution(n, k);
