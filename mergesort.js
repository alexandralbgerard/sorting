function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */

  return [firstHalf, secondHalf];
}

function merge(twoArrays){
  let firstHalf = twoArrays[0]
  let secondHalf = twoArrays[1]
  let mergedArray = []
  if(firstHalf.length === 1){
    if(firstHalf[0] < secondHalf[0]){
      mergedArray = firstHalf.concat(secondHalf)
    }
    else{
      mergedArray = secondHalf.concat(firstHalf)
    }}
  else{

    while(firstHalf.length>0 || secondHalf.length>0){
      if(!firstHalf){
        return mergedArray.concat(secondHalf)
      }
      else if(!secondHalf){
        return mergedArray.concat(firstHalf)
      }
      else if(secondHalf[0] > firstHalf[0]){
        mergedArray.push(firstHalf.shift())

      }
      else{
        mergedArray.push(secondHalf.shift())
      }
    }
  }

  return mergedArray;
}

function mergeSort(unsortedArray){
    let sortedArray = [];
    let splitArr = split(unsortedArray)
    return sortedArray;
}
