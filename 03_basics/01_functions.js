function sayHitesh(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

//sayHitesh()


    // function addTwoNumbers(number1, number2){

    //     // let result = number1 + number2
    //     // return result
    //     return number1 + number2
    // }

    // const result = addTwoNumbers(3, 5)
    // console.log(result)


    function loginUserMessage(username = 'kaushlendra'){
        if(!username){

        }else{
            return `${username} just logged in`
        }
    }

 const  islogin = loginUserMessage();
// console.log(islogin)



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username id ${anyobject.username} and price is ${anyobject.price}`);
}

const result1 = handleObject(user);

//console.log(result1);


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

