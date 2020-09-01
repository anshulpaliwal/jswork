function rectArea(l,b){
    if(isNaN(l) || isNaN(b))
    throw "Parameter passed is not a number";
    else {
        console.log("area= " + l*b);
    }
}
try{
    rectArea(5,3);
    rectArea(10,"a");
    // console.log(ab);
}
catch(error){
    console.log(error);
    console.log("message- " + error.message);
    console.log("Error name- " + error.name);
}
finally{
    console.log("it will always execute whether error occurs or not");
}