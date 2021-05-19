function scuberGreetingForFeet(number){
  // Write your code here!
  if (number <= 400) {
    return "This one is on me!"
  }
  else if (number > 2500) {
    return "No can do."
  }
  else if (number > 2000) {
    return "I will gladly take your thirty bucks."
  }
  
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {return 'Ok, sounds good.'
  } else {
  return "No go."
  }
}

function switchOnCharmFromTip(){
  // Write your code here!
  let tip
  switch(tip) {
    case "generous" : 
    return "Thank you so much.";
    break;
    case "not as generous" : 
    return 'Thank you.';
    break;
    default: return "Bye."
  }
}