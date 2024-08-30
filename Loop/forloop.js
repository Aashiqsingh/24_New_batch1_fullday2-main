// for(let i=0;i<5;i++){

//     console.log("hello world");
    
// }

// var n = 10;
// var fact = 1;

// for(let i=1;i<=n;i++){
//     // fact *= i;
//     fact = fact * i;
// }

// console.log(fact);

// for(let i=0;i<5;i++){
//     // console.log("*");
//     for(let j=0;j<5;j++){
//         // console.log(j);
//         console.log("*");
        
        
//     }
    
// }

var n = 16;
var flag = false;

for(let i=2;i<n;i++){
    if(n % i == 0){
        flag = true;
    }
}

if(flag == false){
    console.log("prime number");
}
else{
    console.log("Not Prime number");
}

