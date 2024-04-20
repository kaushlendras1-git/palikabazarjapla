


// const  startsWith = (str,world) => {
//     str = str.trim().toLowerCase().split(" ");
//     //console.log(str[0]); 
//     if(str[0] == world) return true
//     else return false
// }


// const startsWith = (str, substr) =>{
//     return str.toLowserCase().startsWith(substr.toLowserCase());
// }

const startsWith = (str, substr) => {
    return str.toLowerCase().slice(0,substr.length) === substr.toLowerCase()
}

console.log(startsWith("Hello world", "hello"));
console.log(startsWith("Hello world", "world"));