function compute()
{
    amount = document.getElementById("amount").value;
    interest = document.getElementById("interest").value;
    years = document.getElementById("years").value;
    var result = amount;
    for (var i = 0; i < years; i++) {
        result+=result*(interest/100);
    }
    text = "If you deposit " + amount + ",<br>" + "at an interest rate of " + rate + "%."+ "<br>" + "You will receive an amount of " + result + ",<br>" + "in the year" +  years+2021;
    document.getElementById("result").innerHTML = text;
        
}
        