function checkage(age){
    if(age>18){
        return "you are a man";
    }
    else if(age<18 && age>8) 
        return "you are boy";
    
    else{
        return "you are a child";
    }
}
console.log(checkage(13));

//switch statement

function numtogreek(n){
    var r=""
    switch(n){
        case 1: r="alpha";break;
        case 2: r="beta";break;
        case 3: r="gamma";break;
        case 4: r="delta";break;
        default: r="error";break;
    }
    return r;
}
console.log(numtogreek(1))