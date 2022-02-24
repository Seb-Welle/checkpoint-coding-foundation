function zipStrings(strA, strB) {
  let arrA = strA.split("");
  let arrB = strB.split("");
  let resultArr = [];
  for (let i = 0; i < arrA.length || i < arrB.length; i++) {
    resultArr.push(arrA[i]);
    resultArr.push(arrB[i]);
  }
  let resultStr = resultArr.join("");
  return resultStr;
}
