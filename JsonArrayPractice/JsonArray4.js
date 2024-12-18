var language = ["hindi","english","french","hungarian","telgu","tamil","turkish"];



// var x = language.filter((lang)=>{
//     return lang != "french"
// })

// console.log(x);


// const DeleteLanguage = (langName)=>{

//     var y = language.filter((lang)=>{
//         return lang != langName  // telgu
//     })

//     return y
    

    
// }

// var delLang = "english";


// var x = DeleteLanguage(delLang)
// console.log(x);


// const DeleteLanguage = (langName)=>{

//     return language.filter((lang)=>{
//         return lang != langName  // telgu
//     })

    
    

    
// }

// var delLang = "english";


// var x = DeleteLanguage(delLang)
// console.log(x);



// const DeleteLanguage = (langName)=>{

//     return language.filter((lang)=>lang != langName)
// }

// var delLang = "french";


// var x = DeleteLanguage(delLang)
// console.log(x);



const DeleteLanguage = (langName)=> language.filter((lang)=>lang != langName)

var delLang = "french";
var x = DeleteLanguage(delLang)
console.log(x);