// implement countOccurences() using basic stuff, then with array.reduce()

const numbers = [1,2,3,4];

const count = countOccurrences(numbers,1);

console.log(countOccurrences(numbers,1));
console.log(countOccurrencesWithReduce(numbers,1));

function countOccurrencesWithReduce(array, searchElement) {
  return array.reduce(
    (accumulator, currentValue) => {
      const occurence = currentValue === searchElement ? 1 : 0;
        return accumulator + occurence;
  }, 0);
}

function countOccurrences(array, searchElement) {
  let result = 0;

  array.forEach( element => { 
    if( element===searchElement )
      result++;    
  });

  return result;
}