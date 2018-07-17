//promise练习
let myFirstPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('成功');
        },250);
    });
myFirstPromise.then(function(successMessage){
    console.log('我成功了'+successMessage);
})
