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

// var totalSalaryOfFacebook = company.find((comp)=> comp.name === "facebook").employees.reduce((x,y)=>{
//     return x + y.salary;
// },0)
// console.log(totalSalaryOfFacebook) //;

// var totalSalaryOfFacebook = company.find((comp)=> comp.name === "facebook").employees.reduce((sum,emp)=> sum + emp.salary,0)
// console.log(totalSalaryOfFacebook) //;


// var x = company.find((comp)=>comp.name==="facebook").employees.filter((emp)=>emp.salary);                      
// console.log(x);

// var comp = company.find((fac)=>fac.name ==="Facebook").employees.filter((fac)=>fac.salary);
// console.log(comp);

// var totalSalary = company.find((cmp) => cmp.name === "facebook").employees.reduce(
//     (sum, emp) => sum + emp.salary,
//     0 
//   );
  
//   console.log(totalSalary);


// var salary = salary.find((salary)=> salary == "facebook"
// console.log(salary);

// var TotSalary =  company.map((comp)=>comp.employees.salary.reduce((sum,salary)=>{return sum + salary},0)
// console.log("Total : " + TotSalary);


// var com= company.map((comp)=> comp.employees.filter((emp)=>emp.department ==="HR"));
// console.log(com);

// var x = company.find((comp)=> comp.name === "facebook").employees.filter((emp)=> emp.gender === "female" && emp.salary > 90000)

// console.log(x);


// var data = company.map((comp)=> comp.employees.filter((emp)=> emp.isMarried))
// console.log(data);



// var marriedPerson = company.map((comp)=>{
//     return comp.employees.filter((emp)=>{
//         return emp.isMarried === true
//     })
// })

// console.log(marriedPerson);






// var x=  company.find((comp)=>comp.name === "google").employees.filter((emp)=>emp.salary > 90000)
// console.log(x);





// var EmpyName = company.find((comp)=> comp.name ==="google" && comp.salary > 90000).employees.filter((emp)=>emp.name)

// console.log(EmpyName);



// var salary = company.find((comp)=> comp.name ==="google").employees.filter((emp)=>emp.salary>90000)
// console.log(salary);

// var x = company.map((comp)=>comp==="google"&& comp.salary>90000)
// console.log(x)

// var nw = company.find((cmp) =>  cmp.name == "google" ).employees.filter((ema)=> salary > 90000)
// console.log(nw);

// var x = company.map((comp)=>comp==="google"&& comp.salary>90000)
// console.log(x)


// var x = company.filter((comp)=>comp==="google" &&  comp.salary >90000) 
// console.log(x);



// var fndIsMarried = company.find((comp)=> comp.name ==="facebook").employees.filter((emp)=>emp.isMarried === true)
// console.log(fndIsMarried);



// var googleEmployee = company.find((comp)=> comp.name === "google").employees.map((emp)=>emp.name)
// console.log(googleEmployee);






// var compName = company.map((comp)=>comp.name)
// console.log(compName);
