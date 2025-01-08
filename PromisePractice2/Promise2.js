const product = ()=>{

    console.log("product is goind to purchase..");
    

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({productId:105,name:"I phone",price:60000,discription:{ram:"8gb",storage:"1tb",camera:"16mp",battery:"10h"},message:"succeffully purchase.."})
        },3000)
    })

}

const payment = (data)=>{

    console.log("payment is going to be paid...");
    
    return new Promise((success,failure)=>{

        setTimeout(()=>{
            success({message:"Payment successful..",paymentId:data.productId,price:data.price,discription:data.discription})
        },4000)
    })
}


product().then((data)=>{
    console.log("product purchase....",data);
    console.log("message...",data.message);
    
    payment(data).then((payment)=>{
        console.log("Payment successful....",payment);
        console.log("message...",payment.message);
        
    }).catch((err)=>{
        console.log("Payment failed....",err);
    })
}).catch((error)=>{
    console.log("Error in product purchase....",error);
})