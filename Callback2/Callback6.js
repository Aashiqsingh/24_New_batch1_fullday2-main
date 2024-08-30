const pngHandler = (option)=> option.fname + " Attached File with size "+ option.size


const jpgHandler = (option)=> option.fname + " Attached File with size "+ option.size



const docHandler = (option)=> option.fname + " Attached File with size "+ option.size


const Handler = (File,cb,size)=> cb({fname:File,size:size})

// const Handler = (File , cb , size)=>{
//     // var x = cb({fname:File,size:size})
//     // console.log("File calling ..."+ x);

//     return cb({fname:File,size:size})
    
// }

var FileName = "abc.doc"
var flag;


if(FileName.endsWith(".jpg")){

    flag = Handler(FileName,jpgHandler,"1200kb")
}
else if(FileName.endsWith(".png")){
    flag = Handler(FileName,pngHandler,"800kb")
}
else if(FileName.endsWith(".doc")){
    flag = Handler(FileName,docHandler,"400kb")
}

console.log(flag);

