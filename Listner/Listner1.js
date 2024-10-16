var txt = document.getElementById("txt");

txt.addEventListener("click",()=>{

    // alert("hello..")
    txt.innerHTML = "Royal technosoft pvt ltd.."
})

txt.addEventListener("dblclick",()=>{
    txt.style.color = "red"
})
txt.addEventListener("mouseenter",()=>{
    txt.style.backgroundColor = "green";
})