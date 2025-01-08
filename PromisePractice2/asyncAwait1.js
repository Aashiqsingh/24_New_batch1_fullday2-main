// async function getData(){

//     console.log("starting data fetching...");
    

//     var promise = await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("data fetched successfully...")
//         },3000)
//     })

//     console.log(promise);
    
//     console.log("Ending fetching data...");
    

// }

// getData()


const getData = async()=>{

    console.log("Starting fetching data...");
    

    var promise = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("data fetched successfully...")
            reject("Fetching data failed...")
        },3000)
    })

    // console.log("Fetching data...",promise);
    

    // console.log("ending data fetched...");
    
}

const data = async()=>{
    if(getData){
        try{
            var result = await getData();
            console.log(result);
        } catch(error){
            console.log(error);
        }
    }
}

data()