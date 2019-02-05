// implement the .includes() method of Array

const numbers = [1,2,3,4];

console.log(includes(numbers, 1));
console.log(includesWithSome(numbers, 1));

// solution using Array.some()

function includesWithSome(array, searchElement) {
  return array.some(item => item === searchElement);
}

// lecture solution

function includes(array, searchElement) {
  for(let item of array)
    if(item === searchElement)
      return true;
  return false;
}