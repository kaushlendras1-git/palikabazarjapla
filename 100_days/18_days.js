

const isUpperCase = (char) =>{
    // if(char.charCodeAt(0) >= 65 &&  char.charCodeAt(0)  <= 90 ){
    //    console.log(char.charCodeAt(0))
    //     // return true;
    // }
    // return false;

    return char === char.toUpperCase();

}

console.log(isUpperCase('A'));
//console.log(isLowerCase('b'));