const submitHandler = (event)=>{
    event.preventDefault();

    // alert("Successfully...")
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var age = document.getElementById("age")



    console.log(name.value);
    console.log(email.value);
    console.log(age.value);


    var user = {
        name:name.value,
        email:email.value,
        age:age.value
    }
    
    // var output = document.getElementById("output")


    // var ans = JSON.stringify(user)

    // output.innerHTML = ans;

    // console.log(ans[0]);
    

    // console.log("user----",user);

    // output.innerHTML = user

    // var mobile = document.getElementsByClassName("mobile").value;
    // console.log(mobile);
    
    

}