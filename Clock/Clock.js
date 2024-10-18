var hours = 0;
var minutes = 0;
var seconds = 0;

var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');


 function start2(){
    seconds++;
    if(seconds == 60){
        minutes++;
        seconds = 0;
    }
    if(minutes == 60){
        hours++;
        minutes = 0;
    }

    sec.innerHTML = seconds < 10 ? "0"+seconds : seconds
    min.innerHTML = minutes < 10 ? "0"+minutes : minutes
    hour.innerHTML = hours < 10 ? "0"+hours : hours
 }


 var x;
function start(){
    x = setInterval(start2, 1000);
}

function stop(){

    clearInterval(x);
}

function reset(){
    hours = 0;
    minutes = 0;
    seconds = 0;

    sec.innerHTML = "00";
    min.innerHTML = "00";
    hour.innerHTML = "00";

    clearInterval(x);
}