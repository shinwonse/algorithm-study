const path = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const solution = (input) => {
  const n = Number(input.shift());
  const m = Number(input.shift());
  const graph = [...new Array(n + 1)].map(() => []);
  const visited = [...new Array(n + 1)].fill(0);
  let cnt = 0;

  for (const edge of input) {
    const [start, dest] = edge.split(" ").map(Number);
    graph[start].push(dest);
    graph[dest].push(start);
  }
  visited[1] = 1;

  const dfs = (start) => {
    for (const dest of graph[start]) {
      if (!visited[dest]) {
        visited[dest] = 1;
        cnt += 1;
        dfs(dest);
      }
    }
  };

  dfs(1);
  console.log(cnt);
};

solution(input);
