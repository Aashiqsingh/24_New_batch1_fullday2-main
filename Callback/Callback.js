const demo = ()=>{

    console.log("demo function called");
    
}



const test = (x)=>{

    // console.log(x);
    x()
    
}

// test("ram")
test(demo)