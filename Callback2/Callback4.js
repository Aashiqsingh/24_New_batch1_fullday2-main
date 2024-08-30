const pngHandler = (option)=>{
    return option.name + " Attached File with size "+ option.size

}

const jpgHandler = (option)=>{
    return option.fname + " Attached File with size "+ option.size

}

const docHandler = (option)=>{
    return option.name + " Attached File with size "+ option.size

}

const Handler = (File , cb , size)=>{
    var x = cb({fname:File,size:size})
    console.log("File calling ..."+ x);
    
}

var FileName = "abc.jpg"

if(FileName.endsWith(".jpg")){

    Handler(FileName,jpgHandler,"1200kb")
}
else if(FileName.endsWith(".png")){
    Handler(FileName,pngHandler,"800kb")
}
else if(FileName.endsWith(".doc")){
    Handler(FileName,docHandler,"400kb")
}
