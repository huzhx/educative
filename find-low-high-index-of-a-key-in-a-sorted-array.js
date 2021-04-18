const findIndexes = (arr, key) => {
  const output = [];
  output[0] = findLowerIndex(key);
  output[1] = findHigherIndex(key);

  return output;

  function findLowerIndex(key) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === key) {
        right = mid - 1;
      } else if (arr[mid] < key) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return arr[left] === key ? left : -1;
  }

  function findHigherIndex(key) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === key) {
        left = mid + 1;
      } else if (arr[mid] < key) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return arr[right] === key ? right : -1;
  }
};

export default findIndexes;
