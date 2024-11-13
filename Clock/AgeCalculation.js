const  ageCalculator = (birthdate)=>{

    const birthDate = new Date(birthdate)
    

    const currentDate = new Date()

    // console.log(currentDate);

    var age = currentDate.getFullYear() - birthDate.getFullYear()
    var monDiff = currentDate.getMonth() - birthDate.getMonth() 
    var dayDiff = currentDate.getDate() - birthDate.getDate()

    return {
        age : age,
        monDiff : monDiff,
        dayDiff : dayDiff
    }
    

}
var x = ageCalculator("2006-11-15")
console.log("Diffrence age = ",x);
