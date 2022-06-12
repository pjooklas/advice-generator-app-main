'use strict';
const adviceID = document.getElementById("id");
const advice = document.getElementById("advice");

const fetchAdvice = () => {    
 fetch("https://api.adviceslip.com/advice") 
  .then(response => response.json()) 
  .then(data => {
    adviceID.innerHTML = `<h1>ADVICE # ${data.slip.id}</h1>`;
    advice.innerHTML = `<p>“${data.slip.advice}”</p>`;


  })
  .catch(error => console.error(error));
}

fetchAdvice();



