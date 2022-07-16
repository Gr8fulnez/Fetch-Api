//normal function 

function myFunction() {
    return console.log("Async/Await")
}
myFunction();

//async must be placed before a function 

async function myFunction(){
    let sentence = "Promise is resolved"
    return sentence
}
myFunction().then(alert);

//The word "async" before a F means one simple thing: a function 
//always returns a promise.and other values are wraped in a 
//a resolved promise automatically 

//another method 
async function myFunction() {
    return Promise.resolve("Promise is resolved");
}
myFunction().then(console.log)

//Await keyword
//it works only inside async function 
//it tell we have to wait untill we resolve promise 

 async function myFunction (){
     let promise = new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve("I am async and await keyword")
         }, 2000);
     })
     let result = await promise;
     console.log(result);
 }
 myFunction()

//Reading api data 
async function myFunction() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(response)
    //convert to an object format cus its already in Json
    let userData = await response.json()
    console.log(userData)
}
myFunction()


function loadData(url) {
    return fetch(url).then(response => {
        if (response.status == 200) {
            console.log(response)
            return response.json();
        } else {
            throw new Error(response.status);
        }
    })
}
loadData("https://jsonplaceholder.typicode.com/todos").catch(alert);

//reading github users data 

