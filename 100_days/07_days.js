
const findMax = (arr) => {
    console.log(arr)
    console.log(...arr)
     return Math.max(...arr)
}


console.log(findMax([1,4,6,8,9,0]));
console.log(findMax([2,4,-8,6,79,-34]));
console.log(findMax([5]));