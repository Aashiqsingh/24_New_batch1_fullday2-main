var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true,
                salary:13000,
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true,
                salary:15000
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true,
                salary:12000
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
                isActive:true,
                salary:16000
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false,
                salary:14000
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
                isActive:true,
                salary:17070
            },
            {
                name:"priya",
                age:37,
                gender:"female",
                isActive:true,
                salary:19500
            },
            {
                name:"parth",
                age:39,
                gender:"male",
                isActive:true,
                salary:15500
            },
            {
                name:"sunita",
                age:42,
                gender:"female",
                isActive:false,
                salary:55689
            }
            
        ]
    },
]


// var TotalSalary = departments.map((dapart)=> dapart.employees.reduce((sum,emp)=> sum + emp.salary,0))
// console.log(TotalSalary);



// var departFemale = departments.map((depart)=> depart.employees.filter((emp)=>emp.gender === "female"))
// console.log(departFemale);



// var ag = departments.find((dep)=>dep.name =="IT").employees.filter((age)=>age.age>24 && age.gender =="male");
// console.log(ag);

// var x = departments.find((depart)=> depart.name  == "IT").employees.filter((emp)=>emp.gender == "male" && emp.age > "24")
// console.log(x);

// var fndFemaleEmp = departments.find((depart)=> depart.name == "Finance").employees.filter((emp)=>emp.gender =="female")
// console.log(fndFemaleEmp);



// var newArr = departments.map((depart)=> depart.employees.map((emp)=>emp.name))
// console.log(newArr);




// for(let i=0;i<departments.length;i++){

//     // console.log(departments[i].name);
//     for(let j=0;j<departments[i].employees.length;j++){
//         console.log(departments[i].employees[j].name);
        
//     }
    
// }