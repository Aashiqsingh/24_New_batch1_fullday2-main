const addUser = (e)=>{
    e.preventDefault();
   
    let roll = document.getElementById("roll");
    let name = document.getElementById("name");
    let age = document.getElementById("age");

    

    let tbody = document.getElementById("tbody");

    let tr = document.createElement('tr');
    let idTd = document.createElement('td')
    let nameTd = document.createElement('td')
    let ageTd = document.createElement('td')
    let actionTd = document.createElement('td')
    let detail = document.createElement('button')
    detail.innerHTML = "Details";
    detail.className = "btn btn-primary"
    

    let deleteUser = document.createElement('button')
    deleteUser.innerHTML = "Delete"
    deleteUser.className = "btn btn-danger"  
    
    deleteUser.addEventListener("click",()=>{
        alert("User deleted successfully..")
        tr.remove();

    })

    idTd.innerHTML = roll.value;
    nameTd.innerHTML = name.value;
    ageTd.innerHTML = age.value;

    detail.addEventListener("click",()=>{
        alert("name = "+name.value)
    })

    tbody.appendChild(tr);
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(ageTd);
    tr.appendChild(actionTd);
    actionTd.appendChild(detail)
    actionTd.appendChild(deleteUser)

    var table = document.getElementById("table");
    table.className = "table table-primary"


}