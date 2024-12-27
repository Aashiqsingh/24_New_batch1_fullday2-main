const getOrder = ()=>{

    console.log("Order is going to placed...");
    

    return promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                orderId:123,
                name:"rahul",
                amount:499,
                orderDate:"27 dec",
                message:"order is successfully"
            })
        },3000)
    })
}

const getPayment = (data)=>{

    console.log("Payment is going to placed...");
    

    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve({
            //     paymentId:2356,
            //     name:data.name,
            //     amount:data.amount,
            //     paymentDate:"28 dec",
            //     message:"payment is successfully"
            // })


            reject({
                message:"payment is rejected..."
            })
        },4000)
    })
}

getOrder().then((data)=>{
    console.log("Order is placed...",data);
    getPayment(data).then((payment)=>{
        console.log("payment is successfully...",payment);
        
    }).catch((err)=>{
        console.log("Payment is failed...",err);
        console.log(err.message);
        
        
    })
    
}).catch((err)=>{
    console.log("Order is cancelled...",err);
    
})