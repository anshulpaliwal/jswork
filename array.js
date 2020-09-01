var car= {
    brand : "Maruti",
    colour : "silver",
    insurance : "yes",
    model : "baleno",
}
console.log(car);
console.log(car.brand);
console.log(car["model"]);

// iteration of array
var arr = ["1" , "56" , "35" , "23"];

for(let i = 0 ; i<arr.length; i++)
{
    console.log(arr[i]);
}
//iterate through foreach
var array=[1,2,3,4,5,6,7,8,9];
array.forEach(fun);
function fun(value){
    value=value+1;
    console.log(value)
}



