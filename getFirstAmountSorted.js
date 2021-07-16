// let array = process.argv[2];
// const number = process.argv[3];

//array = array.sort();

// console.log(array);

let newArray = []

function getFirstAmountSorted(inputArray, numberOfItems) {
  newArray = inputArray.sort();
  newArray = newArray.slice(0, numberOfItems);
  return newArray;
};

//getFirstAmountSorted(['a', 'c', 'b'], 2);

//console.log(newArray);