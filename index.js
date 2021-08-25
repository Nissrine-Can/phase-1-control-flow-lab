function scuberGreetingForFeet(ride){
  
   if (ride <= 400) {
    return "This one is on me!"
   }else if (ride > 400 && ride <= 2000) {
      return "Charge is twenty dollars."
  } else if (ride > 2000 &&  ride <= 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  } 
} 
scuberGreetingForFeet(199);


function ternaryCheckCity(destination){
  
   return destination === "NYC" ? "Ok, sounds good." : "No go."

}
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous' : 
            return 'Thank you so much.'
    case 'not as generous' :
            return 'Thank you.'
    default : 
            return 'Bye.'
  }
}
switchOnCharmFromTip('thanks for everything');
