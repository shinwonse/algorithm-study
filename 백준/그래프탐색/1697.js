const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const n = input[0];
const k = input[1];

function solution(n, k) {
  const visit = Array.from({ length: 100001 }, () => 0);
  const bfs = (n) => {
    const queue = [];
    queue.push([n, 0]);
    visit[n] = 1;
    while (queue.length) {
      const [cur, time] = queue.shift();
      if (cur === k) return time;
      for (next of [cur - 1, cur + 1, cur * 2]) {
        if (!visit[next] && next >= 0 && next <= 100001) {
          visit[next] = 1;
          queue.push([next, time + 1]);
        }
      }
    }
  }
  return bfs(n);
}

console.log(solution(n, k));