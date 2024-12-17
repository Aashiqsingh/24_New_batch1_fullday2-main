var company = [
    {
        name :"google",
        employees:[
            {
                name:"rahul",
                age:30,
                department:"software",
                isMarried:true,
                child:1,
                salary:99000,
                gender:"male"
            },
            {
                name:"ramesh",
                age:35,
                department:"HR",
                isMarried:false,
                child:0,
                salary:120000,
                gender:"male"
            },
            {
                name:"rajvi",
                age:22,
                department:"department head",
                isMarried:false,
                child:0,
                salary:85000,
                gender:"female",
            }
        ]
    },
    {
        name:"facebook",
        employees:[
            {
                name:"smit",
                age:32,
                department:"HR",
                isMarried:false,
                child:0,
                salary:110000,
                gender:"male"
            },
            {
                name:"akansha",
                age:28,
                department:"manager",
                isMarried:true,
                child:2,
                salary:105000,
                gender:"female"
            },
            {
                name:"aarti",
                age:25,
                department:"tester",
                isMarried:false,
                child:0,
                salary:90000,
                gender:"female",
            }
        ]
    }
]


var x = company.find((comp)=> comp.name === "facebook").employees.filter((emp)=> emp.gender === "female")
console.log(x);






// var x = company.filter((comp)=>{
//     return comp.name === "facebook"
// }).map((emp)=>{
//     return emp.employees.filter((emp)=> emp.gender === "female")
// })
// console.log(x);







// var x = company.map((comp)=> comp.employees.map((emp)=> emp.salary > 100000))
// console.log(x);







// company.forEach((comp)=>{

//     console.log(comp.employees.forEach((emp)=>{
//         console.log(emp);
        
//     }));
    
// })

// var x = company.map((comp)=>{
//     return comp.employees.map((emp)=> {
//         return emp.name
//     })
// })

// console.log(x);







// company.forEach((comp)=>{

//     console.log(comp);
    
// })

// var x = company.map((comp)=>{
//     return comp
// })

// console.log(x);
