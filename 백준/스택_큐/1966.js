const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')

const n = input[0];
const arr = input.slice(1, );

function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    const count = arr[i * 2].split(' ')[0];
    const findIndex = arr[i * 2].split(' ')[1];
    const printArr = arr[i * 2 + 1].split(' ');
    let mapArr = printArr.map((priority, index) => {
      return {
        index: index, priority: priority
      };
    });

    let queue = [];

    while (mapArr.length > 0) {
      let temp = mapArr.shift();
      let hasHighPriority = mapArr.some(v => v.priority > temp.priority)
      if (hasHighPriority) {
        mapArr.push(temp);
      } else {
        queue.push(temp);
      }
    }
    console.log(queue.findIndex(v => v.index == findIndex) + 1);
  }
}

solution(n, arr);