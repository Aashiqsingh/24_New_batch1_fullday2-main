var students = [
    {
        id:1,
        name:"rahul",
        age:35,
        email:"rahul@gmail.com",
        gender:"male",
        isMarried:false,
        child:0
    },
    {
        id:2,
        name:"roshan",
        age:25,
        email:"roshan@gmail.com",
        gender:"male",
        isMarried:true,
        child:2
    },
    {
        id:3,
        name:"radha",
        age:28,
        email:"radha@gmail.com",
        gender:"female",
        isMarried:true,
        child:1
    },
    {
        id:4,
        name:"seeta",
        age:32,
        email:"seeta@gmail.com",
        gender:"female",
        isMarried:false,
        child:0
    }
]

var fndFemEmp = students.filter((student)=> student.gender == "female" && student.isMarried)
console.log(fndFemEmp);


// var data = students.filter((stu)=> stu.age > 25).map((student)=> student.name)
// console.log(data);




// var arr = students.filter((stu)=>{
//     return stu.age > 25
// })
// arr = arr.map((stu)=>{
//     return stu.name
    
 
// })
// console.log(arr);




// var newAyy = students.filter((students)=>{
//     return students.age > 25
// })

// console.log(newAyy);

// var newArr = students.filter((stu)=> stu.age>25).map((student)=>student.name)
// console.log(newArr);





// var x = students.map((student)=>{
//     return student.name.toUpperCase()
// })
// console.log(x);





// students.forEach((student)=>{
//     console.log(student.name);
    
// })


// for(let i=0;i<students.length;i++){
//     if(students[i].gender == "male"){
//         console.log(students[i].name + " " + students[i].email);
        
//     }
// }


// console.log(students);
// console.log(students[0]);
// console.log(students[1].email);


// for(let i=0;i<students.length;i++){
//     console.log(students[i].name);

// }






