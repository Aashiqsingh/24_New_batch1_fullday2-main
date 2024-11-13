function txt(){

    // var h1 = document.createElement("h1");
    // h1.innerHTML = "Royal technosoft pvt ltd."


    // var img = document.createElement("img")
    // img.setAttribute("src","https://m.media-amazon.com/images/S/pv-target-images/ff2aea615a8371afb073343fffbea7d9d7dab447da1f3df7198f861d08d2781d.jpg")
    // img.style.width = "200px";
    // img.style.height = "200px";

    // var body = document.getElementById("body");


    // body.appendChild(h1);
    // body.appendChild(img);


    var nameLbl = document.createElement("label")
    nameLbl.innerHTML = "Name :";
    var nameInp = document.createElement("input");
    var btn = document.createElement("input");
    btn.type = "submit";
    btn.addEventListener("click",()=>{
        console.log(nameInp.value);
        
    })
    


    var body = document.getElementById("body");
    body.appendChild(nameLbl);
    body.appendChild(nameInp);
    body.appendChild(btn);
}