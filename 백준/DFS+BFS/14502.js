const path = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const graph = input.map((i) => i.split(" ").map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let ans = 0;

const countingSafeZone = (arr) => {
  let cnt = 0;
  const queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      // 전염시키기
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] === 0) {
        arr[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }
  // 전염되고 남은 안전 공간
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 0) {
        cnt += 1;
      }
    }
  }
  return cnt;
};

const dfs = (cnt) => {
  if (cnt === 3) {
    let arr = graph.map((v) => [...v]);
    let cntOfSafe = countingSafeZone(arr);
    ans = Math.max(ans, cntOfSafe);
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 0) {
        graph[i][j] = 1;
        dfs(cnt + 1);
        graph[i][j] = 0;
      }
    }
  }
};

dfs(0);
console.log(ans);
