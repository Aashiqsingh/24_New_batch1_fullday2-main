function add(a,b)
{
    console.log("Addition = ",a+b);
    
}
function sub(a,b){

    return a - b;
}

function mul(a,b){

    return a * b;
}

function div(a,b){
    console.log("divide = ",a/b);
    
}


var x = parseInt(prompt("Enter first number :-"))
var y = parseInt(prompt("Enter second number :-"))
var choice = parseInt(prompt("1 -- addition \n 2 -- subtract \n 3 -- multiply \n 4 -- divide \n\n\n Enter your choice :-" ))

switch(choice){
    case 1:
        add(x,y)
        break;

    case 2:
        var z = sub(x,y)
        console.log("Subtrcat = ",z);
        break;

    case 3:
        var z = mul(x,y)
        console.log("Multiplication = ",z);
        break;

    case 4:
        div(x,y);
        break;
        
}