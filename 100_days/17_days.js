

let toCamelCase = (str) => {
    return str
    .trim()
    .split(" ")
    .map((curElm, index)=>{

            if(index === 0 ){
                return  curElm.toLowerCase();
            }else{
                return curElm.charAt(0).toUpperCase() + curElm.slice(1).toLowerCase();
            }

        })
    .join("");
}

console.log(toCamelCase("        Hello morld! Ramesh       "));