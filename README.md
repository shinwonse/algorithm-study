# ⌨️ 코딩테스트 대비 레포지토리 (JS)

## 배열의 특정 연속된 구간을 처리하는 경우
- 문제에서 연속된 데이터 구간을 처리하기를 원한다면?
### 특정한 합을 가지는 부분 연속 수열 찾기
[문제 설명]
- N개의 자연수로 구성된 수열이 있습니다.
- 합이 M인 부분 연속 수열의 개수를 구해보세요
- 시간 제한: O(N)

[문제 해결 방법]
- ***투포인터 알고리즘***: 리스트에 순차적으로 접근해야 할 때 두개의 점을 이용해 위치를 기록하면 처리하는 기법
```javascript
// 데이터의 개수 N과 부분 연속 수열의 합 M을 입력받기
const n = 5;
const m = 5;
const data = [1, 2, 3, 2, 5]

// 차례로 개수, 구간합, end 포인터
let result = 0;
let summary = 0;
let end = 0;

// start를 차례대로 증가시키며 반복
for (let start = 0; start < n; start += 1) {
  while (summary < m && end < n) {
    summary += data[end]
	  end += 1;
  }
  if (summary === m) {
    result += 1;
  }
  summary -= data[start];
}

console.log(result);
```
### 구간 합 빠르게 계산하기
[문제 설명]
- 아래와 같이 N개의 정수로 구성된 수열이 있습니다.
- M개의 쿼리 정보가 주어집니다.
  - 각 쿼리는 L과 R로 구성됩니다.
  - [L, R] 구간에 해당하는 데이터들의 합을 모두 구하는 문제입니다.
- 시간 제한: O(N + M)

[문제 해결 방법]
- Prefix Sum

```javascript
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
```

