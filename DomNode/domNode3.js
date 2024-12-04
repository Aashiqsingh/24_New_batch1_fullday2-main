var users = [
    // {
    //     id: 1,
    //     name: "John Doe",
    //     age: 30
    // },
    // {
    //     id: 2,
    //     name: "Jane Smith",
    //     age: 25
    // },
    // {
    //     id: 3,
    //     name: "Mike Johnson",
    //     age: 28
    // }
]

function load(){
    // addUser(users)
    for(let i=0;i<users.length;i++){
        addUser(users[i])
    }
}
const updateUser = (user)=>{

    let tbody = document.getElementById("tbody");

    var update = document.getElementById('update');
    var form = document.createElement('form');
    let idlable = document.createElement("lable")
    idlable.innerHTML = "Id"
    let idInput = document.createElement("input")
    idInput.type = "text"

    let namelable = document.createElement("lable")
    namelable.innerHTML = "Name"
    let nameInput = document.createElement("input")
    nameInput.type = "text"

    let agelable = document.createElement("lable")
    agelable.innerHTML = "Age"
    let ageInput = document.createElement("input")
    ageInput.type = "text"

    let subBtn = document.createElement("input")
    subBtn.type = "submit"

    // var newUser = {
    //     name:idInput.value,
    //     age: ageInput.value,
    // }

    subBtn.addEventListener("click",(e)=>{
            e.preventDefault();

            // users.push(newUser)

            var foundUser = users.find((user)=>{
                return user.id == idInput.value
            })

            if(foundUser){
                foundUser.name = nameInput.value
                foundUser.age = ageInput.value
                
            }
            // console.log(foundUser.name);
            console.log(users);

            // tbody.style.display = 'none';
            // users.push(foundUser)

            tbody.innerHTML = ""

            
            for(let i=0;i<users.length;i++){
                addUser(users[i]);
            }
            

            update.removeChild(form)
           
    })

    

    
    

    form.appendChild(idlable)
    form.appendChild(idInput)
    form.appendChild(namelable)
    form.appendChild(nameInput)
    form.appendChild(agelable)
    form.appendChild(ageInput)
    form.appendChild(subBtn)
    update.appendChild(form);
}
const addUser = (user)=>{
    


    let tbody = document.getElementById('tbody');

    
        let tr = document.createElement('tr');

    let idTd = document.createElement('td');
    idTd.innerHTML = user.id;

    let nameTd = document.createElement('td');
    nameTd.innerHTML = user.name;

    let ageTd = document.createElement('td');
    ageTd.innerHTML = user.age;

    let actionTd = document.createElement('td');
    let detailbtn = document.createElement('button');
    detailbtn.className = "btn btn-info"
    detailbtn.innerHTML = "Details";
    detailbtn.addEventListener("click",()=>{
        alert("name = "+user.name)
    })


    let deletebtn = document.createElement('button');
    deletebtn.className = "btn btn-danger"
    deletebtn.innerHTML = "Delete";
    deletebtn.addEventListener("click",()=>{
        tr.remove();
    })

    let updatebtn = document.createElement('button');
    updatebtn.className = "btn btn-primary"
    updatebtn.innerHTML = "Update";
    updatebtn.addEventListener("click",()=>{
        updateUser(user);
    })


    
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(ageTd);
    tr.appendChild(actionTd);
    actionTd.appendChild(detailbtn);
    actionTd.appendChild(deletebtn);
    actionTd.appendChild(updatebtn);
    tbody.appendChild(tr);
    }

    


const  HandleSubmit = (e)=>{
    e.preventDefault();

    let roll = document.getElementById('roll').value;
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;


    var userObj = {
        id:roll,
        name: name,
        age: age
    }
    users.push(userObj);
    addUser(userObj)
}

