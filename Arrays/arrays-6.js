//implement getMax() using basic stuff, then with array.reduce()

const numbers = [1,2,3,4];

const max = getMax(numbers);

console.log(getMax(numbers));
console.log(getMaxWithReduce([]));

function getMax(array){
  if (array.length === 0)
    return undefined;

  let max = array[0];

  for (let item of array) {
    if (item > max){
      max = item;
    }
  }
  return max;
}

function getMaxWithReduce(array){
  if (array.length === 0)
    return undefined;

  return array.reduce(
    (a, b) => (a < b) ? b : a);
}