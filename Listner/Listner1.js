var btn = document.getElementById("btn")

btn.addEventListener("click",()=>{

    // alert("form submiteed...");
    console.log("Form submitted successfully...");
    
})

btn.addEventListener("dblclick",()=>{

    btn.style.backgroundColor = "red";
})

btn.addEventListener("mouseenter",()=>{

    btn.style.height = "100px";
    btn.style.width = "200px";
})