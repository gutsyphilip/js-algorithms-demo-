// USING A FOR LOOP
function rangeSum(arr) {
  let sum = 0;
  for (i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

// USING THE ARITHMETIC PROGRESSION FORMULA
function rangeSum(arr) {
  let arrList = [];
  for (i = arr[0]; i <= arr[1]; i++) {
    arrList.push(i);
  }
  return (arrList.length * (arr[0] + arr[1])) / 2;
}

// USING RECURSION
function rangeSum(arr) {
  if (arr[0] == arr[1]) {
    return arr[0];
  } else {
    return rangeSum([arr[0], arr[1] - 1]) + arr[1];
  }
}

// USING .REDUCE()
function rangeSum(arr) {
  let arrList = [];
  for (i = arr[0]; i <= arr[1]; i++) {
    arrList.push(i);
  }
  return arrList.reduce((acc, num) => acc + num, 0);
}
