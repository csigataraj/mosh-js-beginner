
const numbers = [1,2,3,4];
try{
  const count = countOccurrencesWithReduce(null, 1);
  console.log(countOccurrencesWithReduce(numbers,1));
} catch (e) {
  console.log(e.message);
} 


function countOccurrencesWithReduce(array, searchElement) {
  if(!Array.isArray(array))
    throw new Error('Invalid array.')

  return array.reduce(
    (accumulator, currentValue) => {
      const occurence = currentValue === searchElement ? 1 : 0;
        return accumulator + occurence;
  }, 0);
}