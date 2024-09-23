var CurrentBalance = 35000;

var ans = document.getElementById("ans");

function withdraw(){

    var withdrawalAmount = parseInt(prompt("Enter the amount to withdraw:"));

    if( withdrawalAmount < CurrentBalance)
    {
        // console.log("Your " + withdrawalAmount + " Succeffully withdraw...");
        ans.innerHTML = "Your " + withdrawalAmount + " withdraw successfully..."
        CurrentBalance-= withdrawalAmount;
        
    }
    else{
        console.log("Insufficient balance...");
        
    }
}

function deposit(){
    var depositAmount = parseInt(prompt("Enter the amount to deposit:"));
    CurrentBalance+=depositAmount;
    // CurrentBalance = CurrentBalance + depositAmount;
    // console.log("After deposit balance = ",CurrentBalance);
    ans.innerHTML = "After deposit balance = " + CurrentBalance;
    
}

function chkbal(){

    // console.log("your availbale balance is " + CurrentBalance);
    ans.innerHTML = "Your available balance is " + CurrentBalance;
    
}
