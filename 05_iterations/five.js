const coding = ["js","ruby","java","php","javascript"]

// coding.forEach( function (val){
//         console.log(val)
// })

// coding.forEach( (val) => {
//     console.log(val)
// })


function printMe(iteam){
    console.log(iteam)
}
//coding.forEach(printMe)

// coding.forEach( (iteam , index , arr) =>{
//     console.log(iteam , index ,arr)
// })


const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {

        languageName : "PHP",
        languageFileName : "pph"
    }
    ,{
        languageName : "Java",
        languageFileName : "java"
    }
]

myCoding.forEach( (item)=>{
 console.log(item.languageName , item.languageFileName)
})

