const getData = ()=>{

    return Promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name:"rahul",
                age:35,
                email:"rahul@gmail.com"
            })
        },3000)
    })




}



getData().then((data)=>{
    console.log(data);
    console.log("Ending...");
}).catch((err)=>{
    console.log(err);
})





// var x = getData()

// console.log("Starting to connect..");

// x.then((data)=>{
//     console.log(data);
//     console.log("emdding...");
    
// })
// x.catch((err)=>{
//     console.log(err);
    
// })

