var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"ajay",
                age:35,
                gender:"male",
                isActive:true
            },
            {
                name:"priya",
                age:37,
                gender:"female",
                isActive:true
            },
            {
                name:"parth",
                age:39,
                gender:"male",
                isActive:true
            },
            {
                name:"sunita",
                age:42,
                gender:"female",
                isActive:false
            }
            
        ]
    },
]

var fndFemaleEmp = departments.find((depart)=> depart.name == "Finance").employees.filter((emp)=>emp.gender =="female")
console.log(fndFemaleEmp);



// var newArr = departments.map((depart)=> depart.employees.map((emp)=>emp.name))
// console.log(newArr);




// for(let i=0;i<departments.length;i++){

//     // console.log(departments[i].name);
//     for(let j=0;j<departments[i].employees.length;j++){
//         console.log(departments[i].employees[j].name);
        
//     }
    
// }