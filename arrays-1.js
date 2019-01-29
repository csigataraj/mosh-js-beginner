// returns an array of all the integers from 'min' to 'max'

const numbers = arrayFromRange(-15,22);

console.log(numbers);

function arrayFromRange(min, max) {
  const result = [];
  
  for(let i=min; i<=max; i++){
    result.push(i);
  }
  return result;
}