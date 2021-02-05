function compute()
{
    amount = Number(document.getElementById("amount").value);
    interest = Number(document.getElementById("rate").value);
    years = Number(document.getElementById("years").value);
    var result = amount*(interest/100)*years;
    var year = 2020 + years;
    text = "If you deposit " + amount + ",<br>" + "at an interest rate of " + interest + "%."+ "<br>" + "You will receive an amount of " + Math.round(result) + ",<br>" + "in the year " +  year;
    document.getElementById("result").innerHTML = text;
        
}
        