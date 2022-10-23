// 데이터의 개수 N과 데이터 입력 받기
const n = 5;
const data = [10, 20, 30, 40, 50];

// Prefix Sum 배열 계산
let summary = 0;
const prefix_sum = [0];
for (let i = 0; i < data.length; i += 1) {
  summary += i;
  prefix_sum.push(summary);
}

// 구간 합 계산
const left = 3;
const right = 4;
console.log(prefix_sum[right] - prefix_sum[left]);
