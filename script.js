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
function nave5(){
  gameplay();
}
function gameplay(n){
  window.location.href = "gameplay.htm";
}
function inizia(){
  let t="<table id='table2'>";
  for(let i = 0; i < 40; i++) {
    t+="<tr class='campogioco'>"
    for(let j = 0; j< 40; j++) {
        t+=`<td class='campogioco'><img class="casella" src="image/casella.png" id="pos${i}${j}"></td>`;
    }
    t+="</tr>";
  }
  t+="</table>";
  document.getElementById("campo").innerHTML=t;
  controlloGiocatore();
}
let posxn=0;
let posyn=0;
let posxs;
let posys;
let fine=false;
let interv;
function controlloGiocatore(){
  document.getElementById("pos00").src="image/casellav.png";
  posxs=cas(10,39);
  posys=cas(10,39);
  document.getElementById(`pos${posys}${posxs}`).src="image/casellar.png";
  interv=setInterval(movimentos,300);
  window.addEventListener("keydown",movimenton);
}
function cas(da,a){
  return Math.floor(Math.random()*(a-da+1))+da;
}
function movimentos(){
  let movscelta=cas(1,4);
  let mov=cas(1,3);
  console.log(mov);
  console.log(posxs);
  console.log(posys);
  if (movscelta==1){
    if (posxs-mov<0){
      posxs=posxs+mov;
      document.getElementById(`pos${posys}${posxs}`).src="image/casellar.png";
      document.getElementById(`pos${posys}${posxs-mov}`).src="image/casella.png";
    }
    else{
      posxs-=mov;
      document.getElementById(`pos${posys}${posxs}`).src="image/casellar.png";
      document.getElementById(`pos${posys}${posxs+mov}`).src="image/casella.png";
    }
  }
  if (movscelta==2){
    if (posxs+mov>39){
      posxs=posxs-mov;
      document.getElementById(`pos${posys}${posxs}`).src="image/casellar.png";
      document.getElementById(`pos${posys}${posxs+mov}`).src="image/casella.png";
    }
    else{
      posxs+=mov;
      document.getElementById(`pos${posys}${posxs}`).src="image/casellar.png";
      document.getElementById(`pos${posys}${posxs-mov}`).src="image/casella.png";
    }
  }
  if (movscelta==3){
    if (posys-mov<0){
      posys=posys+mov;
      document.getElementById(`pos${posys}${posxs}`).src="image/casellar.png";
      document.getElementById(`pos${posys-mov}${posxs}`).src="image/casella.png";
    }
    else{
      posys-=mov;
      document.getElementById(`pos${posys}${posxs}`).src="image/casellar.png";
      document.getElementById(`pos${posys+mov}${posxs}`).src="image/casella.png";
    }
  }
  if (movscelta==4){
    if (posys+mov>39){
      posys=posys-mov;
      document.getElementById(`pos${posys}${posxs}`).src="image/casellar.png";
      document.getElementById(`pos${posys+mov}${posxs}`).src="image/casella.png";
    }
    else{
      posys+=mov;
      document.getElementById(`pos${posys}${posxs}`).src="image/casellar.png";
      document.getElementById(`pos${posys-mov}${posxs}`).src="image/casella.png";
    }
  }
}
function movimenton(event){
    switch (event.key){
      case 'd': 
        if (posxn<39){
          posxn++;
          console.log(posxn);
          console.log(posyn);
          document.getElementById(`pos${posyn}${posxn}`).src="image/casellav.png";
          document.getElementById(`pos${posyn}${posxn-1}`).src="image/casella.png";
        }
      break;
      case 'a': 
        if (posxn>0){
          posxn--;
          console.log(posxn);
          console.log(posyn);
          document.getElementById(`pos${posyn}${posxn}`).src="image/casellav.png";
          document.getElementById(`pos${posyn}${posxn+1}`).src="image/casella.png";
        }
      break;
      case 'w': 
        if (posyn>0){
          posyn--;
          console.log(posxn);
          console.log(posyn);
          document.getElementById(`pos${posyn}${posxn}`).src="image/casellav.png";
          document.getElementById(`pos${posyn+1}${posxn}`).src="image/casella.png";
        }
      break;
      case 's': 
        if (posyn<39){
          posyn++;
          console.log(posxn);
          console.log(posyn);
          document.getElementById(`pos${posyn}${posxn}`).src="image/casellav.png";
          document.getElementById(`pos${posyn-1}${posxn}`).src="image/casella.png";
        }
      break;
        console.log("aaa");
    }
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
