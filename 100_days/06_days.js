
const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g,"");    
    let r_str = str.split("").reverse().join("");    
   return str === r_str ? true : false;
}

console.log(isPalindrome("r , ac , e, c ar"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));