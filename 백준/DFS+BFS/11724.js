const path = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const visited = new Array(N + 1).fill(false);
const edge = [];

for (let i = 1; i <= N; i++) {
  edge[i] = [];
}

for (let i = 0; i < M; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  edge[from].push(to);
  edge[to].push(from);
}

const dfs = (start) => {
  visited[start] = true;
  for (let i = 0; i < edge[start].length; i++) {
    const next = edge[start][i];

    if (!visited[next]) dfs(next);
  }
};

let count = 0;
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    count += 1;
  }
}
console.log(count);
