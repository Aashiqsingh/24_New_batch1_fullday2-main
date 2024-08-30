// 1. without return without argument

function demo(){

    console.log("Hello batch...");

    
}

// demo()

// 2. without return type with argument

function add(a,b)
{
    console.log("Addtion = ",a+b);
    
}

// add()

// 3. with return type without argument

function demo2(){

    return "with return type without argument"
}

// var x = demo2()
// console.log(x);


// 4. with return type with argument

function mul(x,y){
    return x * y
}

var x = mul(4,5)
console.log("Multiply = ",x);
