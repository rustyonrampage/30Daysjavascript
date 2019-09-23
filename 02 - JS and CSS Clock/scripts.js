const clockFace = document.querySelector('#clock-face');
const secondsHand = document.querySelector('#second-hand');
const minutesHand = document.querySelector('#min-hand');
const hourHand = document.querySelector('#hour-hand');


function setDate(){
  let now = new Date();
  
  let seconds = now.getSeconds();
  if(seconds== 0 )
    secondsHand.classList.add('no-transition')
  else if( secondsHand.classList.contains('no-transition') )
    secondsHand.classList.remove('no-transition')
  const secondsDegree = ((seconds/60)*360)+90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  let minutes = now.getMinutes();
  const minutesDegree = ((minutes/60)*360)+90;
  if(minutes== 0 )
    minutesHand.classList.add('no-transition')
  else if( minutesHand.classList.contains('no-transition') )
    minutesHand.classList.remove('no-transition')
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  let hours = now.getHours();
  const hoursDegree = ((hours/12)*360)+90;
  if(hours== 0 )
    hourHand.classList.add('no-transition')
  else if( hourHand.classList.contains('no-transition') )
    hourHand.classList.remove('no-transition')
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;


}

setTimeout(() => {
    clockFace.classList.remove('hidden')
}, 2000);
setInterval( setDate, 1000)