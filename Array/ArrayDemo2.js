var language = ["english","hindi","gujarati","marathi","punjabi","fresh"]

// var flag = false;
// for(let i=0;i<language.length;i++){

//     // if(language[i].length < 6){
//     //     flag = true;
//     // }

//     if(language[i].startsWith("h")){
//         flag = true;
//         break;
//     }
// }

// console.log(flag);


// var lang = language.some((lang)=>{
//     return lang.length < 6
// })
// console.log(lang);

var FindLang = language.some((lang)=> lang.startsWith("z"))
console.log(FindLang);
