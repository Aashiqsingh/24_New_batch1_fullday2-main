const getData = ()=>{

    console.log("Starting to fetch data...");
    

    var promise = new Promise((succesfully,failure)=>{

        setTimeout(()=>{
            succesfully({name:"rahul",age:35,gender:"male"})
        },3000)
    })


    return promise




}

var x = getData()
// console.log(x);

x.then((data)=>{
    console.log("data = ",data);
    console.log("Ending fetchind data....");
    
})

x.catch((error)=>{
    console.log("error = ",error);
})

