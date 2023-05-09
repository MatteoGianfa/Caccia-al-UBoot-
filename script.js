class Nave{
  #mov
  #vis
  #son
  #can
  #posx
  #posy
  constructor(mov,vis,son,can){
    this.#mov=mov;
    this.#vis=vis;
    this.#son=son;
    this.#can=can;
    this.#posx=0;
    this.#posy=0;
  }
  get mov(){
    return this.#mov;
  }
  get vis(){
    return this.#vis;
  }
  get son(){
    return this.#son;
  }
  get can(){
    return this.#can;
  }
  get posx(){
    return this.#posx;
  }
  get posy(){
    return this.#posy;
  }
  muovisu(){
    if (this.#posy-this.#mov>=0){
      this.#posy=this.#posy-this.#mov;
    }
  }
  muovigiu(){
    if (this.#posy<39){
      this.#posy=this.#posy+this.#mov;
    }
  }
  muovisin(){
    if (this.#posx-this.#mov>=0){
      this.#posx=this.#posx-this.#mov;
    }
  }
  muovides(){
    if (this.#posx<39){
      this.#posx=this.#posx+this.#mov;
    }
  }
}
class Cannone{
  #git
  #dan
  constuctor(git,dan){
    this.#git=git;
    this.#dan=dan;
  }
  get git(){
    return this.#git;
  }
  get dan(){
    return this.#dan;
  }
}
function gioco(){
  window.location.href = "Gioco.htm";
}
function regol(){
  window.location.href = "Regole.htm";
}
function comands(){
  window.location.href = "Comandi.htm";
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
function gameplay(){
  window.location.href = "gameplay.htm";
}

function inizia(){
  let t="<table id='table2'>";
  for(let i = 0; i < 40; i++) {
    t+="<tr class='campogioco'>"
    for(let j = 0; j< 40; j++) {
        t+=`<td class='campogioco'><img class="casella" src="image/casella.png" id="px${j}py${i}"></td>`;
    }
    t+="</tr>";
  }
  t+="</table>";
  document.getElementById("campo").innerHTML=t;
  controlloGiocatore();
}
let n=new Nave(3,40,5,new Cannone(3,30));
let posxs;
let posys;
let fine=false;
let interv;
function controlloGiocatore(){
  document.getElementById("px0py0").src="image/casellav.png";
  posxs=cas(10,39);
  posys=cas(10,39);
  interv=setInterval(movimentos,150);
  window.addEventListener("keydown",movimenton);
}
function cas(da,a){
  return Math.floor(Math.random()*(a-da+1))+da;
}
function movimentos(){
  let movscelta=cas(1,4);
  let mov=cas(1,3);
  if (movscelta==1){
    if (posxs!=0){
      posxs-=mov;
      if (posxs<0){
        mov=posxs+mov;
        posxs=0;
      }
    }
    if (n.posx+n.vis>=posxs&&n.posy+n.vis>=posys&&n.posx-n.vis<=posys&&n.posy-n.vis<=posys){
      document.getElementById(`px${posxs}py${posys}`).src="image/casellar.png";
      document.getElementById(`px${posxs+mov}py${posys}`).src="image/casella.png";
    }
    else{
      document.getElementById(`px${posxs}py${posys}`).src="image/casella.png";
      document.getElementById(`px${posxs+mov}py${posys}`).src="image/casella.png";
    }
  }
  if (movscelta==2){
    if (posxs!=39){
      posxs+=mov;
      if (posxs>39){
        mov=39-(posxs-mov);
        posxs=39;
      }
    }
    if (n.posx+n.vis>=posxs&&n.posy+n.vis>=posys&&n.posx-n.vis<=posys&&n.posy-n.vis<=posys){
      document.getElementById(`px${posxs}py${posys}`).src="image/casellar.png";
      document.getElementById(`px${posxs-mov}py${posys}`).src="image/casella.png";
    }
    else{
      document.getElementById(`px${posxs}py${posys}`).src="image/casella.png";
      document.getElementById(`px${posxs-mov}py${posys}`).src="image/casella.png";
    }
  }
  if (movscelta==3){
    if (posys!=0){
      posys-=mov;
      if (posys<0){
        mov=posys+mov;
        posys=0;
      }
    }
    if (n.posx+n.vis>=posxs&&n.posy+n.vis>=posys&&n.posx-n.vis<=posys&&n.posy-n.vis<=posys){
      document.getElementById(`px${posxs}py${posys}`).src="image/casellar.png";
      document.getElementById(`px${posxs}py${posys+mov}`).src="image/casella.png";
    }
    else{
      document.getElementById(`px${posxs}py${posys}`).src="image/casella.png";
      document.getElementById(`px${posxs}py${posys+mov}`).src="image/casella.png";
    }
  }
  if (movscelta==4){
    if (posys!=39){
      posys+=mov;
      if (posys>39){
        mov=39-(posys-mov);
        posys=39;
      }
    }
    if (n.posx+n.vis>=posxs&&n.posy+n.vis>=posys&&n.posx-n.vis<=posys&&n.posy-n.vis<=posys){
      document.getElementById(`px${posxs}py${posys}`).src="image/casellar.png";
      document.getElementById(`px${posxs}py${posys-mov}`).src="image/casella.png";
    }
    else{
      document.getElementById(`px${posxs}py${posys}`).src="image/casella.png";
      document.getElementById(`px${posxs}py${posys-mov}`).src="image/casella.png";
    }
  }
}
function movimenton(event){
    switch (event.key){
      case 'd':
        n.muovides();
        document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
        document.getElementById(`px${n.posx-n.mov}py${n.posy}`).src="image/casella.png";
      break;
      case 'a': 
        n.muovisin();
        document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
        document.getElementById(`px${n.posx+n.mov}py${n.posy}`).src="image/casella.png";
      break;
      case 'w': 
        n.muovisu();
        document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
        document.getElementById(`px${n.posx}py${n.posy+n.mov}`).src="image/casella.png";
      break;
      case 's': 
        n.muovigiu();
        document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
        document.getElementById(`px${n.posx}py${n.posy-n.mov}`).src="image/casella.png";
      break;
    }
}
var path = window.location.pathname;
var page = path.split("/").pop();
if (page=="gameplay.htm"){
  document.addEventListener("DOMContentLoaded",inizia);
  document.addEventListener("DOMContentLoaded",avviaCountdown);
  document.addEventListener("DOMContentLoaded",function(){updateProgressBar(document.querySelector(".progress"), 100);})
}

function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value} HP`;
}  

let time=7*60;
let refreshIntervalId

function avviaCountdown(){
  setInterval(updateCountdown, 1000);
}
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
