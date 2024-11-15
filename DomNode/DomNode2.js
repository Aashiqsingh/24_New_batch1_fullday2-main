var students = [
    {
        id:1,
        name: 'rahul',
        std: '9th',
        email: 'rahul@gmail.com',
        mobile: 983289497,
        isActive: true,
        profile: "https://i.pinimg.com/736x/5a/ab/f8/5aabf84d67477f77d3bb8f0fe4cfcd17.jpg"
    },
    {
        id:2,
        name: 'anil',
        std: '10th',
        email: 'anil@gmail.com',
        mobile: 984389497,
        isActive: true,
        profile: "https://media.istockphoto.com/id/1365601848/photo/portrait-of-a-young-woman-carrying-her-schoolbooks-outside-at-college.jpg?s=612x612&w=0&k=20&c=EVxLUZsL0ueYFF1Nixit6hg-DkiV52ddGw_orw9BSJA="

    },
    {
        id:3,
        name: 'prakash',
        std: '11th',
        email: 'prakash@gmail.com',
        mobile: 985389497,
        isActive: true,
        profile: "https://www.theamericanacademy.com/cdn/shop/articles/1154551314197032.w2jwTajEFOv5KmkfpDWz_height640_800x.png?v=1576868846"

    },
    {
        id:4,
        name: 'ramesh',
        std: '12th',
        email: 'ramesh@gmail.com',
        mobile: 986389497,
        isActive: false,
        profile:"https://www.louisvillecardinal.com/media/2022/11/Depositphotos_122104490_S.jpg"

    }
]

console.log(students);


const getData = ()=>{

    var tbody = document.getElementById("tbody");

    for(let i=0;i<students.length;i++){

    var tr = document.createElement("tr");
    var idTd = document.createElement("td");
    var nameTd = document.createElement("td");
    var stdTd = document.createElement("td");
    var emailTd = document.createElement("td");
    var mobileTd = document.createElement("td");
    var statusTd = document.createElement("td");
    var profileTd = document.createElement("td");
    var img = document.createElement("img");

    idTd.innerHTML = students[i].id;
    nameTd.innerHTML = students[i].name;
    stdTd.innerHTML = students[i].std;
    emailTd.innerHTML = students[i].email;
    mobileTd.innerHTML = students[i].mobile;
    statusTd.innerHTML = students[i].isActive == true ? "Active" : "Not Active";
    img.src = students[i].profile;
    img.style.height = "100px";
    img.style.width = "100px";
    



    tbody.appendChild(tr)
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(stdTd);
    tr.appendChild(emailTd);
    tr.appendChild(mobileTd);
    tr.appendChild(statusTd);
    tr.appendChild(profileTd);
    profileTd.appendChild(img);
    }

    
}
