function changeTxt(){
    // alert("final...")


    var name = document.getElementById("name")

    console.log(name.value);

    if(name.value.length < 4){
        console.log("name should be at least 4 characters");
        
    }
    
    

}

function submit(){
    alert("form submission...")
}