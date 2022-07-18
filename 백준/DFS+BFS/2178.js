const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');
const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const arr = input.slice(1, );

function solution(n, m, arr) {
  const graph = arr.map(v => v.split('').map(Number));
  const visit = Array.from({ length: n }, () => Array(m).fill(0));

  function BFS(x, y) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [];
    queue.push([x, y]);
    visit[x][y] = 1;
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (graph[nx][ny] && !visit[nx][ny]) {
          visit[nx][ny] = visit[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  BFS(0,0);
  console.log(visit[n - 1][m - 1]);
}

solution(n, m, arr);
