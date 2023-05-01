class nave{
  #n
  constructor(n){
    this.#n=n;
  }
  get n(){
    return this.#n;
  }
}
function gioco(){
  window.location.href = "Gioco.htm";
}
function nave1(){
  gameplay();
}
function nave2(){
  gameplay();
}
function nave3(){
  gameplay();
}
function nave4(){
  gameplay();
}
function gameplay(n){
  window.location.href = "gameplay.htm";
}
function inizia(){
  let t="";
  for(let i = 0; i < 40; i++) {
    for(let j = 0; j< 40; j++) {
        t+=`<div class="casella" id="pos${i}${j}">${i+1}</div>`;
    }
    t+="<br>";
  }
  document.getElementById("campo").innerHTML=t;
}
var path = window.location.pathname;
var page = path.split("/").pop();
if (page=="gameplay.htm"){
  document.addEventListener("DOMContentLoaded",inizia);
}

let time = 7 * 60; //minuti * 60 secondi
let refreshIntervalId = setInterval(updateCountdown, 1000); 

function updateCountdown() {
    const minuti = Math.floor(time / 60); 
    let secondi = time % 60;

    secondi = secondi < 10 ? '0' + secondi : secondi; 
    const contdownEl = document.getElementById("countdown"); 
    contdownEl.innerHTML = `${minuti}:${secondi}`;

    time--;

    if (time < 0) { 
        clearInterval(refreshIntervalId);
    }
}
