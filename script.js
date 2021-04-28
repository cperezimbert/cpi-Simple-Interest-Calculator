function compute()
{
    if(checkdata()){
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }else{
        return false;
      }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function checkdata(){
            //Create references to the input elements we wish to validate
           var principal = document.getElementById("principal");
            
           //Check if field is empty
           if(principal.value == ""){
             alert("Please enter the amount");
             principal.focus();
              return false;
             }
          //Check if field is a positive number
           if(principal.value <0){
              alert("Please enter a positive number");
             principal.focus();
              return false;
             }
         //If all is well return true.
             return true;
          }       