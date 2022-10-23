// 데이터의 개수 N과 부분 연속 수열의 합 M을 입력받기
const n = 5;
const m = 5;
const data = [1, 2, 3, 2, 5];

// 차례로 개수, 구간합, end 포인터
let result = 0;
let summary = 0;
let end = 0;

// start를 차례대로 증가시키며 반복
for (let start = 0; start < n; start += 1) {
  while (summary < m && end < n) {
    summary += data[end];
    end += 1;
  }
  if (summary === m) {
    result += 1;
  }
  summary -= data[start];
}

console.log(result);
