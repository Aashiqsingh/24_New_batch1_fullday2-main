// JSON  Javascript object notation

// Json : key : value 

// var student = {
//     roll:13,
//     name:"rutvik",
//     age:32,
//     isActive:true,
//     email:"rutvik@gmail.com"
// }


// // console.log(student);
// // console.log(typeof student);

// console.log(student.name);
// console.log(student.email);





var product = {
    productId:1632,
    name:"I Phone",
    color:["red","green","skyblue","black"],
    isStock:true,
    features:{
        camera:12,
        battery:4000,
        memory:128,
        ram:"8gb"
    }
}

console.log(product);
console.log(product.name);
console.log(product.color);
console.log(product.color[0]);
console.log(product.features);
console.log(product.features.camera);
console.log(product.features.ram);




// for(let i=0;i<product.color.length;i++){
//     console.log(product.color[i]);
    
// }



