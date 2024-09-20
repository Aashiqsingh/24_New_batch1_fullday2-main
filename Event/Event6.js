// console.log(Math.floor(8.28));
// console.log(Math.ceil(8.02));


// console.log(Math.round(8.49));
// console.log(Math.trunc(8.9873));


// var x = Math.floor(Math.random() * 1000000)
// console.log(x);




    function changeClr(){

        var txt = document.getElementById("txt").value 


        if(txt === "square"){
        var height = parseInt(prompt("Enter height"))
        var width = parseInt(prompt("Enter width"))
    
        
    
    
        var output = document.getElementById("output")
        output.style.height = height + "px"
        output.style.width = width + "px"
        output.style.backgroundColor = "red"



        }
    
    }

    function circle(){
        var output = document.getElementById("output")
        output.style.height = "500px"
        output.style.width = "500px"

        output.style.transition = "2s"
    }

