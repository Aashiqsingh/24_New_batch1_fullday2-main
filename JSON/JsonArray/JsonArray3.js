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
            },
            {
                name:"aarti",
                age:25,
                department:"tester",
                isMarried:false,
                child:1,
                salary:90000,
            }
        ]
    }
]


var x=  company.find((comp)=>comp.name === "google").employees.filter((emp)=>emp.salary > 90000)
console.log(x);





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
