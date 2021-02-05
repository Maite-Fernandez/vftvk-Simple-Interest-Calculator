function compute()
{
    amount = Number(document.getElementById("amount").value);
    interest = Number(document.getElementById("rate").value);
    years = Number(document.getElementById("years").value);
    //Check if fields are empty
          if(amount<=0){
                alert("Please enter a positive amount");
                amount.focus();
                return false;
          }
          if(years<=0){
                alert("Please enter a positive number of years");
                years.focus();
                return false;
          }
    var result = amount*(interest/100)*years;
    var year = 2020 + years;
    text = "If you deposit " + amount + ",<br>" + "at an interest rate of " + interest + "%."+ "<br>" + "You will receive an amount of " + Math.round(result) + ",<br>" + "in the year " +  year;
    document.getElementById("result").innerHTML = text;
    return true;
        
}
        