function getData(){

    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Data fetched successfully...")
            // reject("Error fetching data...")
        },3000)
    })

    console.log(promise);

    console.log("start...");
    

    promise.then((data)=>{
        console.log(data);
        console.log("end...");
        
    })
    promise.catch((error)=>{
        console.log(error);
        console.log("end...");

    })


    
    
    
}


getData()