const SetData = ()=>{

    let name = document.getElementById("name");
    let email = document.getElementById("email");


    localStorage.setItem("name",name.value)
     localStorage.setItem("email",email.value)



    // location.reload()


    
}

const GetData = ()=>{

    var userName = localStorage.getItem("name")
    var userEmail = localStorage.getItem("email")


    let output = document.getElementById("output")

    let name = document.createElement("p");
    let email = document.createElement("p");

    name.innerHTML = "Name =  " +userName
    email.innerHTML = "Email = " + userEmail

    output.appendChild(name)
    output.appendChild(email)
}


const clrstg = ()=>{

    // localStorage.removeItem("name");
    localStorage.clear()
    location.reload()
}

// localStorage.removeItem

// const GetData = ()=>{

//     let name = document.getElementById("name");
//     let email = document.getElementById("email");


//     sessionStorage.setItem("name",name.value)
//      sessionStorage.setItem("email",email.value)



//     location.reload()


    
// }

// var userName = sessionStorage.getItem("name")

// var userEmail = sessionStorage.getItem("email")

// console.log("Name = ",userName);
// console.log("Email = ",userEmail);

