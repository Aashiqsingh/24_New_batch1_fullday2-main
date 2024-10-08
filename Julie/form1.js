const submitHandler = (event)=>{
    event.preventDefault();


    const hobbies = document.getElementsByName("hobbies")
    console.log(hobbies);

    var hobby = []
    
    if(hobbies[0].checked === true){
        hobby.push("cricket")

    }
    if(hobbies[1].checked === true){
        hobby.push("singing")
    }
    if(hobbies[2].checked === true){
        hobby.push("dancing")
    }
    if(hobbies[3].checked === true){
        hobby.push("garba")
    }


    console.log("you selected  ",hobby);
    
    
}