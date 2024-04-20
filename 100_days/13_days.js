

const countVowels =  (str) => {
    let vowels = ['a','e','i','o','u'];
    let arr = str.split('');
    let count = 0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log(countVowels("Helloo world")); //4
console.log(countVowels("Overlooks the central landscaped greens, the high street on one side and the large green belt on the other")); // 32