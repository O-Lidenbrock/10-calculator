const arr = [1,2,3,4,5,6];

// function sumOfTripledEvens(array) {
//   return array
//   .filter((num) => num % 2 === 0)
//   .map((num) => num * 3)
//   .reduce((acc, curr) => acc + curr);
  
// }

const arr2 = arr.filter((num)=> { return num % 2 === 0; })
const arr3 = arr2.map((num) => { return num*3;})
const final = arr3.reduce((total, current) => { return total + current })