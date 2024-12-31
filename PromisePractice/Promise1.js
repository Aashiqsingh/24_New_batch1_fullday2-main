function getData(){

    console.log("Data is going to fetch...");
    

    var promise = new Promise((success,failure)=>{
        setTimeout(()=>{
            success("Data fetched successfully...")
            // failure("Failed to fetch data...")
        },3000)
    })


    // console.log(promise);
    promise.then((data)=>{
        console.log(data);
        console.log("ending fetch data....");
        
    })
    promise.catch((err)=>{
        console.log(err);
        
    })


    


}

getData()