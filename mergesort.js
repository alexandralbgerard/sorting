function split(wholeArray) {
  let midpoint = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint);

  return [firstHalf, secondHalf];
}

function merge(twoArrays) {
  let firstHalf = twoArrays[0];
  let secondHalf = twoArrays[1];
  let mergedArray = [];
  // if (firstHalf.length === 1) {
  //   if (firstHalf[0] < secondHalf[0]) {
  //     mergedArray = firstHalf.concat(secondHalf);
  //   } else {
  //     mergedArray = secondHalf.concat(firstHalf);
  //   }
  // }
  //if () {
  while (firstHalf.length > 0 || secondHalf.length > 0) {
    if (firstHalf.length === 0) {
      return mergedArray.concat(secondHalf);
    } else if (secondHalf.length === 0) {
      return mergedArray.concat(firstHalf);
    } else if (secondHalf[0] > firstHalf[0]) {
      mergedArray.push(firstHalf.shift());
    } else {
      mergedArray.push(secondHalf.shift());
    }
  }
  // }

  return mergedArray;
}

function mergeSort(unsortedArray) {
  let splitArr = split(unsortedArray);

  if (splitArr[1].length === 1) {
    return merge(splitArr);
  } else if (splitArr[1].length === 2 && splitArr[0].length === 1) {
    let sorted1 = mergeSort(splitArr[1]);
    return merge([splitArr[0], sorted1]);
  } else {
    let merge1 = mergeSort(splitArr[0]);
    let merge2 = mergeSort(splitArr[1]);
    return merge([merge1, merge2]);
  }
}
