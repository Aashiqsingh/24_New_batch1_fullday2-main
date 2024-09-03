var language = ["english","hindi","gujarati","marathi","punjabi","french"]


// const deleteLang = (lang)=>{

//     var x = language.filter((l)=>{
//         return l!=lang
//     })

//     return x
// }

// const deleteLang = (lang)=>{

//     return language.filter((l)=>{
//         return l!=lang;
//     })
// }

const deleteLang = (lang)=> language.filter((l)=> l!=lang)
var x = deleteLang("hindi")
console.log(x);
