

const calculatMean = (arr) => {

if(arr.length === 0 ){
    return 0;
}

let sum = arr.reduce(  (accumulator, currentValue) => accumulator+currentValue, 0);
    return sum/arr.length;


}

console.log(calculatMean([1,2,3,4,5]));
console.log(calculatMean([10,20,30]));
console.log(calculatMean([-1,0,1]));
console.log(calculatMean([]));

