function main() {
  let array = [23, 12, 4, 87, 43, 45, 8, 90];
  array = mergeSort(array);
  console.log(array);
}

function mergeSort(array) {
  if (array.length < 2) return array;
  const right = [...array];
  //divide array;
  const middle = array.length / 2;
  const left = right.splice(0, middle);
  console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const items = [];
  //use shift to remove first element of array and get remove element value push to sorted items array
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      items.push(left.shift());
    } else {
      items.push(right.shift());
    }
  }
  //merge array
  return [...items, ...left, ...right];
}

main();
