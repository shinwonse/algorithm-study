const path = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M, K] = input.shift().split(" ").map(Number);
const arr = [];
const cntArr = [];
input.forEach((v) => {
  arr.push(v.split(" ").map(Number));
});
const graph = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);
arr.forEach((v) => {
  const x = v[0];
  const y = v[1];
  graph[x - 1][y - 1] = 1;
});
const visit = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);
// 그래프 준비 완성!
const bfs = (x, y) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];
  queue.push([x, y]);
  visit[x][y] = 1;
  let cnt = 0;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (graph[nx][ny] && !visit[nx][ny]) {
        visit[nx][ny] = visit[x][y] + 1;
        queue.push([nx, ny]);
        cnt += 1;
      }
    }
  }
  cntArr.push(cnt + 1);
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] !== 0) bfs(i, j);
  }
}
console.log(Math.max(...cntArr));
