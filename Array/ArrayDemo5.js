// var language = ["english","hindi","gujarati","marathi","punjabi","fresh"]


// map : it will return new array with same length

// language = language.map((lang)=>{
//     return lang.toUpperCase();
// })

// console.log(language);



// filter : it will return new array with modified data

// var newLang = language.filter((lang)=>{

//     return lang.length > 6
// })

// console.log(newLang);


var language = ["english","hindi","gujarati","marathi","punjabi","french"]

var name = "punjabi";

var newArray = language.filter((lang)=>{

    return lang!=name
})

console.log(newArray);


