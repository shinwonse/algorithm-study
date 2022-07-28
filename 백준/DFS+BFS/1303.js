const path = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: M });
for (let i = 0; i < input.length; i++) {
  graph[i] = input[i].split("");
}
const visit = Array.from({ length: M }, () => Array(N).fill(0));

const bfs = (x, y, team) => {
  let cnt = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const queue = [];
  queue.push([x, y]);
  visit[x][y] = 1;
  cnt += 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
      if (graph[nx][ny] === team && !visit[nx][ny]) {
        visit[nx][ny] = 1;
        queue.push([nx, ny]);
        cnt += 1;
      }
    }
  }
  return cnt;
};

let white = 0;
let blue = 0;
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === "W" && !visit[i][j]) {
      white += Math.pow(bfs(i, j, "W"), 2);
    } else if (graph[i][j] === "B" && !visit[i][j]) {
      blue += Math.pow(bfs(i, j, "B"), 2);
    }
  }
}

console.log(white, blue);
