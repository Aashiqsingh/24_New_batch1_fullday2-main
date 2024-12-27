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
            {
                name:"prakash",
                age:40,
                gender:"male",
                isActive:true
            }
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false
            }
            
        ]
    },
]

var u = departments.map((det)=>det.employees.filter((emp)=>emp.name.includes("i")))
 console.log(u);


// var x = departments.find((depart)=> depart.employees.find((emp)=> emp.name === "payal")).name
// console.log(x);




// var totalEmployees = departments.reduce((total, dept) => total + dept.employees.length, 0);
// console.log(totalEmployees);


// var ag = departments.find((dep)=>dep.name =="HR").employees.filter((emo)=>emo.gender == "female")
//   console.log(ag);





// console.log(departments);

// var x = departments.map((depart)=> depart.employees.map((emp)=> emp.name))
// console.log(x);

// departments.forEach((depart)=>{
//     depart.employees.forEach((emp)=>{
//         console.log(emp.name);
        
//     })
// })