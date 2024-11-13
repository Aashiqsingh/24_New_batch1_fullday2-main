var submit = document.getElementById("submit")

submit.addEventListener("submit",(event)=>{

    event.preventDefault(); 

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let pass = document.getElementById("pass")
    let age = document.getElementById("age")
    let mobile = document.getElementById("mobile")

    var output = document.getElementById("output")

    let mobReg = /[6-9]{1}[0-9]{9}$/;
    let userName = /[A-Z]{1}[A-Za-z]+[0-9]+$/;

    // let email = /[a-z0-9]+$/
    // let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(name.value.match(userName))
    {
        output.innerHTML = "Name is valid"
    }
    else{
        output.innerHTML = "Name is not valid"
    }



    // if(mobile.value.match(mobReg)){
    //     output.innerHTML = "Right"
    // }
    // else{
    //     output.innerHTML = "Wrong"
    // }


    // console.log("Name = ",name.value);
    // console.log("Email = ",email.value);
    // console.log("Password = ",pass.value);
    // console.log("Age = ",age.value);

    // var user = {
    //     name: name.value,
    //     email: email.value,
    //     password: pass.value,
    //     age: age.value
    // }

    // console.log(user);

    // var output = document.getElementById("output")
    // output.innerHTML = JSON.stringify(user)


    
    
})