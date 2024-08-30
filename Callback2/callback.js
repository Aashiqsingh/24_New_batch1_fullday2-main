function singapore(name,amt){

    console.log(name," your picnic singapore confirm with amount ",amt);
    
}

function goa(name,amt){
    
    console.log(name," your picnic goa confirm with amount ",amt);
}

function paris(name,amt){
    
    console.log(name," your picnic paris confirm with amount ",amt);
}


// cb -- callback 
function travel(name,amt,cb){

    cb(name,amt)
}

var budget = 600;

if(budget > 1000)
{
    travel("Rahul",budget,singapore)
}
else if(budget > 700){
    travel("Rahul",budget,goa)
}

else if(budget > 500){
    travel("Rahul",budget,paris)
}
else{
    console.log("You need money");
    
}