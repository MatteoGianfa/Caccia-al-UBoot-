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
    this.vit=vit;  
    this.#posx=cas(10,39);
    this.#posy=cas(10,39);
  }
  get mov(){
    return this.#mov;
  }
  get vit(){
    return this.#vit;
  }
  set vit(vit){                   
    this.#vit = vit;
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
  constructor(git,dan){
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

let n=new Nave(1,1,1,new Cannone(3,30));
let s=new Siluro(3,100);
let fine=false;
let interv;
let intervstato;
let statos=false;
let scoincn=false;
let ncoincs=false;
function controlloGiocatore(){
  document.getElementById("px0py0").src="image/casellav.png";
  document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
  avviaSonar(); 
  interv=setInterval(function(){movimentos(); avviaSonar()},1000); 
  cambiastato();
  window.addEventListener("keydown",function(event){movimenton(event); avviaSonar()}); 
}

function avviaSonar(){   
  let num1;
  let num2;

  if (n.son+n.posx>=s.posx&&n.posx-n.son<=s.posx&&n.son+n.posy>=s.posy&&n.posy-n.son<=s.posy){
    if (n.posx>s.posx){
      num1 = Math.pow(n.posx - s.posx,2);
    }
    else{
      num1 = Math.pow(s.posx - n.posx,2);
    }
    if (n.posy>s.posy){
      num2 = Math.pow(n.posy - s.posy,2);
    }
    else{
      num2 = Math.pow(s.posy - n.posy,2);
    }
    document.getElementById("sonar").innerHTML="Caselle distanza: "+Math.floor(Math.sqrt(num1+num2));
  }
  else{
    document.getElementById("sonar").innerHTML="Non in range";
  }
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
      if (s.posx==n.posx&&s.posy==n.posy){
        document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellav.png";
        document.getElementById(`px${s.posx-s.mov}py${s.posy}`).src="image/casella.png";
        scoincn=true;
      }
      else{
        document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
        if (!scoincn&&!ncoincs){
          document.getElementById(`px${s.posx-s.mov}py${s.posy}`).src="image/casella.png";
        }
        else{
          scoincn=false;
        }
      }
    break;
    case 2:
      s.muovisin();
      if (s.posx==n.posx&&s.posy==n.posy){
        document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellav.png";
        document.getElementById(`px${s.posx+s.mov}py${s.posy}`).src="image/casella.png";
        scoincn=true;
      }
      else{
        document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
        if (!scoincn&&!ncoincs){
          document.getElementById(`px${s.posx+s.mov}py${s.posy}`).src="image/casella.png";
        }
        else{
          scoincn=false;
        }
      }
    break;
    case 3:
      s.muovisu();
      if (s.posx==n.posx&&s.posy==n.posy){
        document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellav.png";
        document.getElementById(`px${s.posx}py${s.posy+s.mov}`).src="image/casella.png";
        scoincn=true;
      }
      else{
        document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
        if (!scoincn&&!ncoincs){
          document.getElementById(`px${s.posx}py${s.posy+s.mov}`).src="image/casella.png";
        }
        else{
          scoincn=false;
        }
      }
    break;
    case 4:
      s.muovigiu();
      if (s.posx==n.posx&&s.posy==n.posy){
        document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellav.png";
        document.getElementById(`px${s.posx}py${s.posy-s.mov}`).src="image/casella.png";
        scoincn=true;
      }
      else{
        document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
        if (!scoincn&&!ncoincs){
          document.getElementById(`px${s.posx}py${s.posy-s.mov}`).src="image/casella.png";
        }
        else{
          scoincn=false;
        }
      }
    break;
  }
}
function movimenton(event){
    switch (event.key){
      case 'd':
        n.muovides();
        if (n.posx==s.posx&&n.posy==s.posy){
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          document.getElementById(`px${n.posx-n.mov}py${n.posy}`).src="image/casella.png";
          ncoincs=true;
        }
        else{
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          document.getElementById(`px${n.posx-n.mov}py${n.posy}`).src="image/casella.png";
          ncoincs=false;
        }
      break;
      case 'a': 
        n.muovisin();
        if (n.posx==s.posx&&n.posy==s.posy){
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          document.getElementById(`px${n.posx+n.mov}py${n.posy}`).src="image/casella.png";
          ncoincs=true;
        }
        else{
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          document.getElementById(`px${n.posx+n.mov}py${n.posy}`).src="image/casella.png";
          ncoincs=false;
        }
      break;
      case 'w': 
        n.muovisu();
        if (n.posx==s.posx&&n.posy==s.posy){
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          document.getElementById(`px${n.posx}py${n.posy+n.mov}`).src="image/casella.png";
          ncoincs=true;
        }
        else{
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          document.getElementById(`px${n.posx}py${n.posy+n.mov}`).src="image/casella.png";
          ncoincs=false;
        }
      break;
      case 's': 
        n.muovigiu();
        if (n.posx==s.posx&&n.posy==s.posy){
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          document.getElementById(`px${n.posx}py${n.posy-n.mov}`).src="image/casella.png";
          ncoincs=true;
        }
        else{
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          document.getElementById(`px${n.posx}py${n.posy-n.mov}`).src="image/casella.png";
          ncoincs=false;
        }
      break;
      case 'l':             
        if((n.can.git+n.posx >= s.posx && n.posx-n.can.git <= s.posx) && (n.posy+n.can.git >= s.posy && n.posy-n.can.git <= s.posy ))
        {
          s.vit = s.vit-n.can.dan;
          if(s.vit <= 0)
          {
            updateHealthBar(document.querySelector(".health"), 0 );
          }
          else
          {
            updateHealthBar(document.querySelector(".health"), s.vit);
          }
        }
      break;
    }
}
var path = window.location.pathname;
var page = path.split("/").pop();
if (page=="gameplay.htm"){
  document.addEventListener("DOMContentLoaded",inizia);
  document.addEventListener("DOMContentLoaded",avviaCountdown);
  document.addEventListener("DOMContentLoaded",function(){updateHealthBar(document.querySelector(".health"), 100);})
}

function updateHealthBar(healthBar, value) {
  value = Math.round(value);
  healthBar.querySelector(".health__fill").style.width = `${value}%`;
  healthBar.querySelector(".health__text").textContent = `${value} HP`;
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
