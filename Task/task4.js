var arr = [1,2,3,4,5];


var newArray = arr.map((arr)=>{
    if(arr%2==1){
        return arr/2;
    }
    else{
        return arr*2;
    }
})

console.log(newArray);
