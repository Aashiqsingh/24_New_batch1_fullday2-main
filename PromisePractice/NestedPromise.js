const orderZomato = ()=>{

    console.log("Order is going to placed...");
    

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:123,
                name:"rahul",
                amount:349,
                message:"Order placed successfully.."
            })
        },3000)
    })


    
    

}


const paymentZomato = (data)=>{

    console.log("Payment is going to placed...");
    


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                name:data.name,
                amount:data.amount,
                message:"Payment is successfully.."
            })
        },4000)
    })
}


orderZomato().then((data)=>{
    console.log("order is placed...",data);
    paymentZomato(data).then((payment)=>{
        console.log("payment is successfully...",payment);
        
    }).catch((err)=>{
        console.log("payment is failed...",err);
    })
}).catch((error)=>{
    console.log("order is cancelled...",error);
})