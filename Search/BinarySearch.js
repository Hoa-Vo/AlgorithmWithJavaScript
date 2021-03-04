function main() {
  const array = [1, 2, 3, 4, 5, 6];
  const result = BinarySearch(array, 7);
  if (result[0]) {
    console.log("found data at index", result[1]);
  } else {
    console.log("array not contain this data");
  }
}
function BinarySearch(array, data) {
  const middle = array.length / 2;
  if (data < array[middle]) {
    for (let i = 0; i < middle; i++) {
      if (array[i] == data) return [true, i];
    }
  } else if (data > array[middle]) {
    for (let i = middle + 1; i < array.length; i++) {
      for (let i = 0; i < middle; i++) {
        if (array[i] == data) return [true, i];
      }
    }
  } else {
    return [true, middle];
  }
  return [false, -1];
}
main();
