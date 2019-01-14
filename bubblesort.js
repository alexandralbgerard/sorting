function bubbleSort(array) {
  /* your code here */
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      let x = j;
      let y = x + 1;
      debugger;
      if (array[x] > array[y]) {
        let first = array[x];
        let second = array[y];
        let swappedArr = swap(first, second);
        array[x] = swappedArr[0];
        array[y] = swappedArr[1];
      }
    }
  }
  return array;
}

function swap(first, second) {
  return [second, first];
}
