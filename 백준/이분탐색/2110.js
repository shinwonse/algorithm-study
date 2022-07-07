const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
const n = input[0].split(' ')[0];
const c = input[0].split(' ')[1];
const home = input.slice(1, );
home.sort((a, b) => a - b);

function routerInstall(distance) {
  let count = 1;
  let cur_home = home[0];
  home.forEach(v => {
    if (distance <= v - cur_home) {
      count += 1;
      cur_home = v;
    }
  })
  return count;
}

function solution(home, c) {
  let answer = 0;
  let start = 1;
  let end = home[home.length - 1] - home[0];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let router_cnt = routerInstall(mid);
    if (router_cnt < c) {
      end = mid - 1;
    } else if (router_cnt >= c) {
      answer = mid;
      start = mid + 1;
    }
  }
  console.log(answer);
}

solution(home, c);
