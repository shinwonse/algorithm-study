function solution(n, arr1, arr2) {
  const binArr1 = [];
  const binArr2 = [];
  let ansArr = [];

  arr1.forEach((v) => binArr1.push(v.toString(2).padStart(n, 0).split("")));
  arr2.forEach((v) => binArr2.push(v.toString(2).padStart(n, 0).split("")));
  console.log(binArr1, binArr2);

  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      let num = Number(binArr1[i][j]) + Number(binArr2[i][j]);
      let str = num === 0 ? " " : "#";
      temp.push(str);
    }
    ansArr.push(temp);
  }
  return ansArr.map((ans) => ans.join(""));
}
