/*formas epaststs valid video indija. Ielikt html failā, script tagos, function , head sadaļā */
function Validate() {
  var epasts = document.getElementById ("text").value;

  var regx = /^([a-zA-Z0-9]\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

  if(regx.text(epasts)){
    alert("You have provided a valid email ID")
    /*document.write("You have successfully subscribed for our email listing. Check your email for discount code") */
    
    return true }

    else{
      alert ("We are not accepting subscriptions Colombia emails")
      return false;

    }
  } 
}