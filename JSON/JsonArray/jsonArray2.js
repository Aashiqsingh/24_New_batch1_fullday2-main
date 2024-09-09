var products = [
    {
        id:1,
        name:"I Phone",
        price:90000,
        isstock:false,
        category:"Mobile",
        color:["black","blue","green","yellow"]
    },
    {
        id:2,
        name:"Samsung Galaxy",
        price:70000,
        isstock:true,
        category:"Mobile",
        color:["white","gray","black","red"]
    },
    {
        id:3,
        name:"Mackbook",
        price:120000,
        isstock:false,
        category:"Computer",
        color:["silver","black","blue"]
    },
    {
        id:4,
        name:"Samsung LED",
        price:50000,
        isstock:true,
        category:"Electronics",
        color:["white","gray","black"]
    }
]

var x = products.find((prod)=> prod.name == "Mackbook")
console.log(x);





// var x = products.filter((pro)=> pro.category == "Computer" && pro.color.includes("silver"))
// // var z= x.map((x)=> x.color)
// console.log(x);





// Reduce -- it will return one value 

// var totalPrice = products.reduce((sum,prod)=>{

//     return sum + prod.price
// },100)

// console.log("Total: " + totalPrice);




// var total = 0;
// products.forEach((prod)=>{
//     total = total + prod.price;
// })

// console.log(total);




// var productName = products.map((prod)=>{
//     return prod.name
// })

// console.log(productName);


// var x = products.map((prod)=>prod.name)
// console.log(x);

