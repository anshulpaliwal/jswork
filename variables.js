var a=10;
function printGlobal(){
    if(a=10){
        console.log("scope is global")
    }
}
printGlobal();
function printLocal(){
    var a=1;
    if(a=1){
        console.log("scope is local")
    }
}
printLocal();
if(a=10){
    console.log("scope is global again")
}