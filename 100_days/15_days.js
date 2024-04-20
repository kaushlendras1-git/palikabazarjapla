
const sumOfSquares = (arr) => {
   // return arr.reduce( (total, num) => total = total + num*num  )
    let sum= 0
   for (let i of arr) {
        sum = sum + (i*i);
    }
    return sum;
}

console.log(sumOfSquares([1,2,3]));