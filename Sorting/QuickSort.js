function main() {
  let array = [23, 12, 4, 87, 43, 45, 8, 90];
  array = quickSort(array);
  console.log(array);
}

function quickSort(array) {
  if (array.length < 2) return array;
  //get pivot element
  const pivot = array[array.length - 1];
  const left = []; // left array
  const right = []; //right array
  for (let i = 0; i < array.length - 1; i++) {
    if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
main();
