const submitHandler = (e)=>{

    e.preventDefault(); // prevent form from submitting normally
    // alert("form is submitted...");


   

    
    
    
}

function changeTxt(){

    var nameErr = document.getElementById("nameErr")

var name = document.getElementById('name')

if(name.value.length < 3){
    // alert("Name must be at least 3 characters long!");
    // console.log("name must be at least 3 characters long!");
    nameErr.innerHTML = "*please must be at least 3 characters long.."
    nameErr.style.color = "red"
    name.style.outline = "2px solid red"

}
else{
    nameErr.innerHTML = ""
    name.style.outline = "2px solid green"
}

console.log("form is submitted..");
console.log("name ==",name);
}