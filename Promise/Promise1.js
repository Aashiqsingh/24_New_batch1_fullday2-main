// synchronous


var getData = ()=>{


    // console.log("Data start fetch ...");
    

    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve("data is going to fetched....")
            // reject("data can't be fetched..")
            
        },3000)
    })


    // console.log(promise);

    promise.then((data)=>{
        console.log(data);
        console.log("End..........");
        
    })
    promise.catch((err)=>{
        console.log(err);
        
    })


    


    // console.log("Data fetch end...");
    
    


}

getData()