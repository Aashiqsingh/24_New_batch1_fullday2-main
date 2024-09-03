

// var flag = false;
// for(let i=0;i<language.length;i++){

//     if(language[i].length > 4){
//         flag = true;
//         break;
//     }
// }
// console.log(flag);


// var newLang = language.every((lang)=>{
//     return lang.length < 6
// })
// console.log(newLang);


// console.log(language[0]);
// console.log(language[1]);


// for(let i=0;i<language.length;i++){
//     console.log(language[i]);
    
// }

var language = ["hnglish","hindi","hujarati","harathi","hunjabi","hresh"]


var newLang = language.every((lang)=>{
    return lang.startsWith("h")
})

console.log(newLang);
