function getData(){

    console.log("Data is going to fetch...");
    

    // var promise = new Promise((success,failure)=>{
    //     setTimeout(()=>{
    //         success("Data fetched successfully...")
    //         // failure("Failed to fetch data...")
    //     },3000)
    // })

    // return promise

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success("Data fetched successfully...")
            // failure("Failed to fetch data...")
        },3000)
    })

    


}

// var x = getData()
// // console.log(x);

// x.then((data)=>{
//     console.log(data);
//     console.log("ending fetch data....");
// })
// x.catch((err)=>{
//     console.log(err);
    
// })



getData().then((data)=>{
    console.log(data);
    console.log("ending fetch data....");
}).catch((error)=>{
    console.log(error);
    console.log("Ending fetch data....");
})