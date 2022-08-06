const path = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const n = Number(input.shift());
const graph = [];
input.forEach((v) => graph.push(v.split("")));
let cnt_able = 0;
let cnt_disable = 0;
const check = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => 0)
);
const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  check[x][y] = 1;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (graph[nx][ny] === graph[x][y] && !check[nx][ny]) {
        check[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
};
// 적록색약 아닌 경우 bfs
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!check[i][j]) {
      bfs(i, j);
      cnt_able++;
    }
  }
}
// 적록색약인 경우 빨강,초록 색깔통합시켜주기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === "R") graph[i][j] = "G";
  }
}
// check 배열 초기화
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    check[i][j] = 0;
  }
}
// 적록색약인 경우 bfs
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!check[i][j]) {
      bfs(i, j);
      cnt_disable++;
    }
  }
}
console.log(cnt_able, cnt_disable);
