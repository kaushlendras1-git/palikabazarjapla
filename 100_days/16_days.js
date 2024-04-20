

// const findMin = (arr) => {
//     return  arr.sort((a, b) => {
//            if(a > b) return -1 
// }).reverse();
// }


const findMin = (arr)  => {
    if(arr.length ===0 ) return "Array is empty"
        return  Math.min(...arr)
 // console.log(...arr);
}


console.log(findMin([5, 10, 8]));
console.log(findMin([5, -3, 0, 12, -7]));
console.log(findMin([]));