// implement except(), 
// returns an array that does not contain the elements 
// of the "excluded" argument

// const numbers = [1,4,1,4,1,1,1,4,4];
const numbers = [1,2,3,4];

const output = except(numbers, [1,4]);
const output1 = exceptUsingSplice(numbers, [1,4]);
const output2 = exceptUsingFilter(numbers, [1,4]);

console.log(output);
console.log(output1);
console.log(output2);


// solution using Array.splice()

function exceptUsingSplice(array, excluded){
  const result = array.slice();

  array.forEach(item => {
    if(excluded.includes(item)){
        result.splice(result.indexOf(item), 1);
      }
    })
  return result;
}

// solution using Array.filter()

function exceptUsingFilter(array, excluded) {
  return array.filter(item => !excluded.includes(item));
}

// lecture solution

function except(array, excluded) {
  const result = [];
  for (let item of array)
    if(!excluded.includes(item))
      output.push(item);
  return output;
}