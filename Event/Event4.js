function callText(){

    var txt = document.getElementById("txt")
    console.log(txt.value);


    var output = document.getElementById("output")
    

    if(txt.value.length < 4)
    {
        // alert("Please enter valid name... upto 4 characters..")

        // console.log("Please enter a valid name ... upto 4 characters");
        output.innerHTML = "*Please enter a valid name ... upto 4 characters"
        output.style.color = "red"
        
    }
    else{
        output.innerHTML = " "
    }

}