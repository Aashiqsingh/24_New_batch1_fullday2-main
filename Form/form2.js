const submitHandler = (event)=>{
    event.preventDefault();

    const name  = document.getElementById("name")
    console.log("name = ",name.value);


    var gen = ""
    const gender = document.getElementsByName("gender")
    
    if(gender[0].checked == true){

        gen = "Male"
    }
    else if(gender[1].checked == true){
        gen = "Female"
    }
    else if(gender[2].checked == true){
        gen = "Other"
    }

    console.log("Gender = ",gen);

    const age = document.getElementById("age")
    console.log("Age = ",age.value);


    if(gen == "Male"){
        if(age.value > 18){
            console.log("eligible for vote");
            
        }
        else{
            console.log("not eligible for vote");
        }
    }
    else if(gen == "Female"){
        if(age.value > 22){
            console.log("eligible for vote");
            
        }
        else{
            console.log("not eligible for vote");
        }
    }
    else{
        if(age.value > 25){
            console.log("eligible for vote");
            
        }
        else{
            console.log("not eligible for vote");
        }
    }


    var user = {
        name:name.value,
        gender:gen,
        age:age.value,
        
    }

    console.log(user);
    
    
    
}