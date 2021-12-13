function scuberGreetingForFeet(someValue){
  if (someValue>2500) {
    return 'No can do.';
  } if (someValue>2000) {
    return 'I will gladly take your thirty bucks.';
  } else if (someValue<=400) {
    return 'This one is on me!';
  }
  // Write your code here!
}

function ternaryCheckCity(city){
return city === `NYC` ? `Ok, sounds good.`:`No go.`;
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
    return "Thank you so much.";
    case "not as generous": 
    return "Thank you.";
    default: 
    return "Bye.";

  }
  // Write your code here!
}