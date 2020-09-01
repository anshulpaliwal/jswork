function fun() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log("the promise has been resolved")
                resolve();
            }
            else {
                console.log("the promise can't be resolved hence rejected")
                reject("error occurs");
            }
        },1000);
    })
}

fun().then(function(){
    console.log("resolve function invokes")
}).catch(function(error){
    console.log("reject function invokes because " + error)
})