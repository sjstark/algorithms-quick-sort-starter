function quickSort(array) {
  // if the length of the array is 0 or 1, return the array
  if (array.length === 0 || array.length === 1) {return array};

  // set the pivot to the first element of the array
  let pivot = array[0]
  // remove the first element of the array
  array.shift();


  // put all values less than the pivot value into an array called left
  let leftArr = []
  // put all values greater than the pivot value into an array called right
  let rightArr = [];

  array.forEach( ele => {
    if (ele < pivot) {
      leftArr.push(ele);
    } else {
      rightArr.push(ele);
    }
  })

  // call quick sort on left and assign the return value to leftSorted
  let leftSorted = quickSort(leftArr)
  // call quick sort on right and assign the return value to rightSorted
  let rightSorted = quickSort(rightArr)

  // return the concatenation of leftSorted, the pivot value, and rightSorted
  return [...leftSorted, pivot, ...rightSorted]
}


module.exports = {
  quickSort
};
