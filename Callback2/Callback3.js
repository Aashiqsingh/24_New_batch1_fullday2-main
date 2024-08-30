function wordHandler(option){
    console.log("Word File attach" , option.fname);
    
}

function pdfHandler(option){
    console.log("PDF File attach" , option.fname);
}

function excelHandler(option){
    console.log("Excel File attach" , option.fname);
}

function Handler(option , cb){
    cb(
        {
            fname:option,
            size:"1000kb"
        }
    )

}

var fileName = "abc.word";

if(fileName.endsWith(".pdf")){
    Handler(fileName,pdfHandler)
}
else if(fileName.endsWith(".excel")){
    Handler(fileName, excelHandler)
}
else if(fileName.endsWith(".word")){
    Handler(fileName, wordHandler)
}
else{
    console.log("Noting....");
    
}