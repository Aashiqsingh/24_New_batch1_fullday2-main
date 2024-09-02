var lang = ["hindi","gujarati","english","marathi","french","bangali"]

// console.log(lang);

// var x = lang.splice(1,1,"sanskrit");
// console.log(x);

var flag = false;
// for(let i=0;i<lang.length;i++){

//     if(lang[i].length > 8){
//         flag = true;
//         break;
//     }
// }

// console.log(flag);


// lang = lang.some((lang)=>{
//     return lang.length >= 8;
// })
// console.log(lang);

lang = lang.some((lang)=> lang.length > 6)
console.log(lang);



