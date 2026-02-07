const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const hiMessage = document.querySelector('#welcome') // get the welcome div

if (isMorning) 
  {
  hiMessage.textContent = "Good morning!";
} 

else if (isAfternoon)
   {
  hiMessage.textContent = "Good afternoon!";
} 
else if (isEvening)
  {
  hiMessage.textContent = "Good evening!";
  }

  localStorage.setItem("It's a secret to everybody", "I am poor student during the day,but during the night I am Batman!") ;
  const secret = localStorage.getItem("It's a secret to everybody");
  if (secret) {
    console.log(secret);
  } else {
    console.log("No secret found in localStorage.");
  }