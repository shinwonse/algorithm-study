const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');
const [n, m, v] = input.shift().split(' ').map(Number);
const arr = [];
input.forEach(v => {
  arr.push(v.split(' ').map(Number));
})
const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
for (let [a, b] of arr) {
  graph[a][b] = 1;
  graph[b][a] = 1;
}

const DFS = (node) => {
  let answer = '';
  let visited = new Array(n + 1).fill(false);
  let stack = [];

  stack.push(node);

  while (stack.length > 0) {
    let cur = stack.pop();

    if (!visited[cur]) {
      visited[cur] = true;
      answer += cur + ' ';

      for (let next = n; next >= 1; next--) {
        if (!visited[next] && graph[cur][next])
          stack.push(next);
      }
    }
  }
  console.log(answer);
}

const BFS = (node) => {
  let answer = '';
  let visited = new Array(n + 1).fill(false);
  visited[node] = true;

  let queue = [];
  queue.push(node);

  while (queue.length > 0) {
    let cur = queue.shift();
    answer += cur + ' ';
    for (let next = 1; next <= n; next++) {
      if (!visited[next] && graph[cur][next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
  console.log(answer);
}

DFS(v);
BFS(v);
