const sum = (a, b) => {
  return a + b;
};

const min = (a, b) => {
  return a - b;
};

// let arr = [5, 3, 2, 6, 4];

const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
export { sum, min, sort };
// module.exports = {
//   sum,
// };
