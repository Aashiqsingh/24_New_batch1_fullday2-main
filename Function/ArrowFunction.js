// const demo = ()=>{

//     console.log("Arrow function called");
    
// }

// demo()

const singapore = (name , amount)=>{


    return name +" You selected to go to singapore with pakage " + amount
}

const laswegas = (name , amount)=>{
    return name +" You selected to go to las vegas with pakage " + amount
}

const paris = (name , amount)=>{
    return name +" You selected to go to paris with pakage " + amount
}


var fname = "Rahul"
var budget = 0;
var x;

if(budget > 20000){

    x = singapore(fname , budget)
}
else if(budget > 15000){
    x = laswegas(fname , budget)
}
else if(budget > 10000){
    x = paris(fname , budget)
}
else{
    console.log("You need money bro ");
    
}

console.log(x)