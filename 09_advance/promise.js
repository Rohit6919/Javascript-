// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hello rohit")
//         resolve();
//     },2000)
    
// });

// promiseOne.then(function(){
//     console.log("HELLO TEJASSS")
// })





// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     resolve({
//         username:"Rohit",
//         email:"rohit@gmail.com"
//     })
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })




// const PromiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"rohit",password: "123"})
//         }else{
//             reject('error something went wrong')
//         }
//     },1000)
// })
//  PromiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("the promise is either resolve or rejected")
// })


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
            let error = false
                if(!error){
                resolve({username:"javascript",password: "123"})
                }else{
                reject('error js went wrong')
                }
            },1000)
})

async function consumepromisefive(){
   const response = await promisefive
   console.log(response);
}
consumepromisefive()