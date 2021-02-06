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
    var year = 2021 + years;
    text = "If you deposit <mark>" + amount + "</mark>,<br>" + "at an interest rate of <mark>" + interest + "%.</mark>"+ "<br>" + "You will receive an amount of <mark>" + Math.round(result) + "</mark>,<br>" + "in the year <mark>" +  year + "</mark>";
    document.getElementById("result").innerHTML = text;
    return true;
        
}
        