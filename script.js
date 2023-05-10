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
class Siluro{
  #mov
  #vit
  #posx
  #posy
  constructor (mov,vit){
    this.#mov=mov;
    this.#vit=vit;
    this.#posx=cas(10,39);
    this.#posy=cas(10,39);
  }
  get mov(){
    return this.#mov;
  }
  get vit(){
    return this.#vit;
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
    if (this.#posy+this.#mov<39){
      this.#posy=this.#posy+this.#mov;
    }
  }
  muovisin(){
    if (this.#posx-this.#mov>=0){
      this.#posx=this.#posx-this.#mov;
    }
  }
  muovides(){
    if (this.#posx+this.#mov<39){
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
let n=new Nave(3,39,1,new Cannone(3,30));
let s=new Siluro(3,100);
let fine=false;
let interv;
let intervstato;
let statos=false;
function controlloGiocatore(){
  document.getElementById("px0py0").src="image/casellav.png";
  document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
  interv=setInterval(movimentos,200);
  cambiastato();
  window.addEventListener("keydown",movimenton);
}
function cas(da,a){
  return Math.floor(Math.random()*(a-da+1))+da;
}
function cambiastato(){
  setTimeout(function(){statos=true; setTimeout(function(){statos=false; cambiastato();},5000)},5000);
}
function movimentos(){
  let movscelta=cas(1,4);
  switch (movscelta){
    case 1:
      s.muovides();
      document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
      document.getElementById(`px${s.posx-s.mov}py${s.posy}`).src="image/casella.png";
    break;
    case 2:
      s.muovisin();
      document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
      document.getElementById(`px${s.posx+s.mov}py${s.posy}`).src="image/casella.png";
    break;
    case 3:
      s.muovisu();
      document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
      document.getElementById(`px${s.posx}py${s.posy+s.mov}`).src="image/casella.png";
    break;
    case 4:
      s.muovigiu();
      document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
      document.getElementById(`px${s.posx}py${s.posy-s.mov}`).src="image/casella.png";
    break;
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
  updateCountdown();
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
