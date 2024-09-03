var language = ["hnglish","hindi","hujarati","harathi","hunjabi","hresh"]


// for(let i=0;i<language.length;i++){

//     console.log(language[i]);
    
// }

// language.forEach((lang)=>{
//     console.log(lang.toLowerCase());
    
// })

// var arr = [3,4,64,32,14,56,75,35]
// var sum = 0;
// for(let i=0;i<arr.length;i++){

//     sum += arr[i]
// }

// console.log(sum);

// arr.forEach((arr)=>{
//     sum += arr
// })

// console.log(sum);

var array = [3,4,64,32,14,56,75,35]
var sum = 100

var totalSum = array.reduce((sum,arr)=>{
    return sum *= arr
},1)

console.log(totalSum);

