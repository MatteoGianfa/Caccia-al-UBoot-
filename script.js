class Nave{
  #mov
  #vis
  #son
  #can
  #posx
  #posy
  #util
  #cooldowncan
  #cooldownaspec
  constructor(mov,vis,son,can,util){
    this.mov=mov;
    this.#vis=vis;
    this.#son=son;
    this.#can=can;
    this.#posx=0;
    this.#posy=0;
    this.util=util;
    this.cooldowncan=false;
    this.cooldownaspec=false;
  }
  get cooldowncan(){
    return this.#cooldowncan;
  }
  set cooldowncan(cooldowncan){
    this.#cooldowncan=cooldowncan;
  }
  get cooldownaspec(){
    return this.#cooldownaspec;
  }
  set cooldownaspec(cooldownaspec){
    this.#cooldownaspec=cooldownaspec;
  }
  set util(util){
    this.#util=util;
  }
  set mov(mov){
    this.#mov=mov;
  }
  get util(){ 
    return this.#util;
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
    else{
      this.#posy=0;
    }
  }
  muovigiu(){
    if (this.#posy+this.#mov<39){
      this.#posy=this.#posy+this.#mov;
    }
    else{
      this.#posy=39;
    }
  }
  muovisin(){
    if (this.#posx-this.#mov>=0){
      this.#posx=this.#posx-this.#mov;
    }
    else{
      this.#posx=0;
    }
  }
  muovides(){
    if (this.#posx+this.#mov<39){
      this.#posx=this.#posx+this.#mov;
    }
    else{
      this.#posx=39;
    }
  }
}

class CHMS extends Nave{

  constructor(mov,vis,son,can,util){
    super(mov,vis,son,can,util);
  }

  aSpec(s){ 
    if (this.util!=0){
      if (!this.cooldownaspec){
        this.cooldownaspec=true;
        let intervasp;
        this.util--;
        if (this.posx+1>=s.posx&&this.posx-1<=s.posx&&this.posy+1>=s.posy&&this.posy-1<=s.posy){
          console.log(this.util);
          s.vit=s.vit-40;
          if (s.vit<=0){
            fine(true);
          }
          else{
            updateHealthBar(document.querySelector(".health"),s.vit);
          }
        }
        if (this.util==0){
          document.getElementById("aspec").innerHTML="Armamento Esaurito";
        }
        else{
          setTimeout(()=>{this.cooldownaspec=false;},20000);
          let tempo=1*20;
          document.getElementById("aspec").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;
          tempo--;
          intervasp=setInterval(()=>{if (tempo==0){document.getElementById("aspec").innerHTML="PRONTO";clearInterval(intervasp)}else{tempo=updateCountdown("aspec",tempo,intervasp)}},1000);
        }
      }
      else{
        document.getElementById("aspec").innerHTML="Armamento in cooldown";
      }
    }
  }

}


class ILHMS extends Nave{
  
  constructor(mov,vis,son,can,util){
    super(mov,vis,son,can,util);
  }

  aSpec(s){
    if (this.util!=0){
      if (!this.cooldownaspec){
        this.cooldownaspec=true;
        let intervasp;
        this.util--;
        if (this.posx+1>=s.posx&&this.posx-1<=s.posx&&this.posy+1>=s.posy&&this.posy-1<=s.posy){
          s.vit=s.vit-35;
          if (s.vit<=0){
            fine(true);
          }
          else{
            updateHealthBar(document.querySelector(".health"),s.vit);
          }
        }
        if (this.util==0){
          document.getElementById("aspec").innerHTML="Armamento Esaurito";
        }
        else{
          setTimeout(()=>{this.cooldownaspec=false;},20000);
          let tempo=1*20;
          document.getElementById("aspec").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;
          tempo--;
          intervasp=setInterval(()=>{if (tempo==0){document.getElementById("aspec").innerHTML="PRONTO";clearInterval(intervasp)}else{tempo=updateCountdown("aspec",tempo,intervasp)}},1000);
        }
      }
      else{
        document.getElementById("aspec").innerHTML="Armamento in cooldown";
      }
    }
  }

}


class CorHMS extends Nave{
  
  constructor(mov,vis,son,can,util){
    super(mov,vis,son,can,util);
  }

  aSpec(){ 
    if (this.util!=0){
      if (!this.cooldownaspec){
        this.cooldownaspec=true;
        let intervasp;
        this.util--;
        console.log(this.mov);
        this.mov=5;
        setTimeout(()=>{this.mov=3},7000);
        if (this.util==0){
          document.getElementById("aspec").innerHTML="Armamento Esaurito";
        }
        else{
          setTimeout(()=>{this.cooldownaspec=false;},20000);
          let tempo=1*20;
          document.getElementById("aspec").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;
          tempo--;
          intervasp=setInterval(()=>{if (tempo==0){document.getElementById("aspec").innerHTML="PRONTO";clearInterval(intervasp)}else{tempo=updateCountdown("aspec",tempo,intervasp)}},1000);
        }
      }
      else{
        document.getElementById("aspec").innerHTML="Armamento in cooldown";
      }
    }
  }

}


class PHMS extends Nave{
  
  #cooldownaspec1
  #cooldownaspec2
  #cooldownaspec3
  #util1
  #util2
  #util3

  constructor(mov,vis,son,can,util1,util2,util3){
    super(mov,vis,son,can);
    this.cooldownaspec1=false;
    this.cooldownaspec2=false;
    this.cooldownaspec3=false;
    this.util1=util1;
    this.util2=util2;
    this.util3=util3;
  }

  get util1(){
    return this.#util1;
  }

  get util2(){
    return this.#util2;
  }

  get util3(){
    return this.#util3;
  }

  set util1(util1){
    this.#util1=util1;
  }

  set util2(util2){
    this.#util2=util2;
  }

  set util3(util3){
    this.#util3=util3;
  }

  get cooldownaspec1(){
    return this.#cooldownaspec1;
  }

  get cooldownaspec2(){
    return this.#cooldownaspec2;
  }

  get cooldownaspec3(){
    return this.#cooldownaspec3;
  }

  set cooldownaspec1(cooldownaspec1){
    this.#cooldownaspec1=cooldownaspec1;
  }

  set cooldownaspec2(cooldownaspec2){
    this.#cooldownaspec2=cooldownaspec2;
  }

  set cooldownaspec3(cooldownaspec3){
    this.#cooldownaspec3=cooldownaspec3;
  }

  aSpec1(s){
    if (this.util1!=0){
      if (!this.cooldownaspec1){
        this.cooldownaspec1=true;
        let intervasp;
        this.util--;
        if (this.posx+6>=s.posx&&this.posx-6<=s.posx&&this.posy+6>=s.posy&&this.posy-6<=s.posy){
          s.vit=s.vit-30;
          if (s.vit<=0){
            fine(false);
          }
          else{
            updateHealthBar(document.querySelector(".health"),s.vit);
          }
        }
        if (this.util==0){
          document.getElementById("aspec1").innerHTML="Armamento Esaurito";
        }
        else{
          setTimeout(()=>{this.cooldownaspec=false;},20000);
          let tempo=1*20;
          document.getElementById("aspec1").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;
          tempo--;
          intervasp=setInterval(()=>{if (tempo==0){document.getElementById("aspec1").innerHTML="PRONTO";clearInterval(intervasp)}else{tempo=updateCountdown("aspec1",tempo,intervasp)}},1000);
        }
      }
      else{
        document.getElementById("aspec1").innerHTML="Armamento in cooldown";
      }
    }
  }
  
  aSpec2(s){
    if (this.util2!=0){
      if (this.cooldownaspec2){
        this.cooldownaspec2=true;
        let intervasp;
        this.util2--;
        if ((s.posx<=this.posx+10&&s.posx>=this.posx-10&&s.posy<=this.posy+3&&s.posy>=this.posy-3)||(s.posy<=this.posy+10&&s.posy>=this.posy-10&&s.posx<=this.posx+3&&s.posx>=this.posx-3)){
          pxtemp=s.posx;
          pytemp=s.posy;
          document.getElementById(`px${pxtemp}py${pytemp}`).src="image/casellar.png";
          setTimeout(()=>{if (pxtemp!=this.posx||pytemp!=this.posy){document.getElementById(`px${pxtemp}py${pytemp}`).src="image/casella.png"}},2000);
        }
        if (this.util==0){
          document.getElementById("aspec2").innerHTML="Armamento Esaurito";
        }
        else{
          setTimeout(()=>{this.cooldownaspec=false;},20000);
          let tempo=1*20;
          document.getElementById("aspec2").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;
          tempo--;
          intervasp=setInterval(()=>{if (tempo==0){document.getElementById("aspec2").innerHTML="PRONTO";clearInterval(intervasp)}else{tempo=updateCountdown("aspec2",tempo,intervasp)}},1000);
        }
      }
      else{
        document.getElementById("aspec2").innerHTML="Armamento in cooldown";
      }
    }
  }

  aSpec3(s){
    if (this.util3!=0){
      if (this.cooldownaspec3){
        this.cooldownaspec3=true;
        let intervasp;
        this.util3--;
        if ((s.posx<=this.posx+8&&s.posx>=this.posx-8&&s.posy<=this.posy+3&&s.posy>=this.posy-3)||(s.posy<=this.posy+8&&s.posy>=this.posy-8&&s.posx<=this.posx+3&&s.posx>=this.posx-3)){
          pxtemp=s.posx;
          pytemp=s.posy;
          let num1;
          let num2;
          if (n.posx>s.posx){
            num1 = Math.pow(n.posx - pxtemp,2);
          }
          else{
            num1 = Math.pow(pxtemp - n.posx,2);
          }
          if (n.posy>s.posy){
            num2 = Math.pow(n.posy - pytemp,2);
          }
          else{
            num2 = Math.pow(pytemp - n.posy,2);
          }
          document.getElementById("aspec3").innerHTML="Caselle distanza: "+Math.floor(Math.sqrt(num1+num2));
        }
        if (this.util==0){
          document.getElementById("aspec3").innerHTML="Armamento Esaurito";
        }
        else{
          setTimeout(()=>{this.cooldownaspec=false;},20000);
          let tempo=1*20;
          document.getElementById("aspec3").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;
          tempo--;
          intervasp=setInterval(()=>{if (tempo==0){document.getElementById("aspec3").innerHTML="PRONTO";clearInterval(intervasp)}else{tempo=updateCountdown("aspec3",tempo,intervasp)}},1000);
        }
      }
      else{
        document.getElementById("aspec3").innerHTML="Armamento in cooldown";
      }
    }
  }

}


class IPHMS extends Nave{
  
  constructor(mov,vis,son,can,util){
    super(mov,vis,son,can,util);
  }

  aSpec(s){
    if (this.util!=0){
      if (!this.cooldownaspec){
        this.cooldownaspec=true;
        let intervasp;
        this.util--;
        if (this.posx+7>=s.posx&&this.posx-7<=s.posx&&this.posy+7>=s.posy&&this.posy-7<=s.posy){
          s.vit=s.vit-30;
          if (s.vit<=0){
            fine(true);
          }
          else{
            updateHealthBar(document.querySelector(".health"),s.vit);
          }
        }
        if (this.util==0){
          document.getElementById("aspec").innerHTML="Armamento Esaurito";
        }
        else{
          setTimeout(()=>{this.cooldownaspec=false;},20000);
          let tempo=1*20;
          document.getElementById("aspec").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;
          tempo--;
          intervasp=setInterval(()=>{if (tempo==0){document.getElementById("aspec").innerHTML="PRONTO";clearInterval(intervasp)}else{tempo=updateCountdown("aspec",tempo,intervasp)}},1000);
        }
      }
      else{
        document.getElementById("aspec").innerHTML="Armamento in cooldown";
      }
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
  gameplay(1); 
}
function nave2(){
  gameplay(2);
}
function nave3(){
  gameplay(3);
}
function nave4(){
  gameplay(4);
}
function nave5(){
  gameplay(5);
}
function gameplay(n){ 
  window.location.href = `gameplay.htm?Nave=${n}`; 
}

let urlParams=new URLSearchParams(window.location.search); 
let nave=urlParams.get("Nave");
let n;
if (nave==1){
  n=new CHMS(4,5,6,new Cannone(2,20),3);
}
if (nave==2){
  n=new ILHMS(3,5,5,new Cannone(3,20),3);
}
if (nave==3){
  n=new IPHMS(3,4,4,new Cannone(3,25),2);
}
if (nave==4){
  n=new CorHMS(3,4,3,new Cannone(5,30),3);
}
if (nave==5){
  n=new PHMS(3,4,4,new Cannone(0,0),999,3,3);
}

function inizia(){
  let t="<table id='table1'>";
  for(let i = 0; i < 40; i++) {
    t+="<tr class='campogioco'>"
    for(let j = 0; j< 40; j++) {
        t+=`<td class='campogioco'><img class="casella" src="image/casella.png" id="px${j}py${i}"></td>`;
    }
    t+="</tr>";
  }
  t+="</table>";
  document.getElementById("campo").innerHTML=t;
  if (n instanceof PHMS){
    document.getElementById("abilita").innerHTML+="<div class='desc'>Cannone Inesistente</div>";
    document.getElementById("abilita").innerHTML+="<div class='desc'>Armamento</div>";
    document.getElementById("abilita").innerHTML+="<div class='desc'>AEREO ricognitore</div>";
    document.getElementById("abilita").innerHTML+="<div id='aspec1' class='desc'>PRONTO</div>";
    document.getElementById("abilita").innerHTML+="<div class='desc'>AEREO sonar</div>";
    document.getElementById("abilita").innerHTML+="<div id='aspec2' class='desc'>PRONTO</div>";
    document.getElementById("abilita").innerHTML+="<div class='desc'>AEREO danno</div>";
    document.getElementById("abilita").innerHTML+="<div id='aspec3' class='desc'>PRONTO</div>";
  }
  else{
    document.getElementById("abilita").innerHTML+="<div class='desc'>Cannone</div>";
    document.getElementById("abilita").innerHTML+="<div id='cann' class='desc'>PRONTO</div>";
    document.getElementById("abilita").innerHTML+="<div class='desc'>Armamento</div>";
    document.getElementById("abilita").innerHTML+="<div id='aspec' class='desc'>PRONTO</div>";
  }
  controlloGiocatore();
}

let s=new Siluro(3,100);
let intervstato;
let statos=false;
let scoincn=false;
let ncoincs=false;
function controlloGiocatore(){
  document.getElementById("px0py0").src="image/casellav.png";
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
  setTimeout(function(){statos=true; setTimeout(function(){statos=false; document.getElementById(`px${s.posx}py${s.posy}`).src="image/casella.png"; cambiastato();},40000)},30000);
}
function movimentos(){
  let movscelta=cas(1,4);
  let pyatt;
  let pxatt;
  switch (movscelta){
    case 1:
      pxatt=s.posx;
      pyatt=s.posy;
      s.muovides();
      if (statos){
        if (s.posx<=n.posx+n.vis&&s.posx>=n.posx-n.vis&&s.posy<n.posy+n.vis&&s.posy>n.posy-n.vis){
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
        }
        else{
          document.getElementById(`px${pxatt}py${pyatt}`).src="image/casella.png";
        }
      }
    break;
    case 2:
      pxatt=s.posx;
      pyatt=s.posy;
      s.muovisin();
      if (statos){
        if (s.posx<=n.posx+n.vis&&s.posx>=n.posx-n.vis&&s.posy<n.posy+n.vis&&s.posy>n.posy-n.vis){
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
        }
        else{
          document.getElementById(`px${pxatt}py${pyatt}`).src="image/casella.png";
        }
      }
    break;
    case 3:
      pxatt=s.posx;
      pyatt=s.posy;
      s.muovisu();
      if (statos){
        if (s.posx<n.posx+n.vis&&s.posx>n.posx-n.vis&&s.posy<n.posy+n.vis&&s.posy>n.posy-n.vis){
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
        }
        else{
          document.getElementById(`px${pxatt}py${pyatt}`).src="image/casella.png";
        }
      }
    break;
    case 4:
      pxatt=s.posx;
      pyatt=s.posy;
      s.muovigiu();
      if (statos){
        if (s.posx<n.posx+n.vis&&s.posx>n.posx-n.vis&&s.posy<n.posy+n.vis&&s.posy>n.posy-n.vis){
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
        }
        else{
          document.getElementById(`px${pxatt}py${pyatt}`).src="image/casella.png";
        }
      }
    break;
  }
}
let possmov=true;
function movimenton(event){
    if (possmov){
      possmov=false;
      setTimeout(()=>{possmov=true},250);
      let posatt;
    switch (event.key){
      case 'D':
      case 'd':
        posatt=n.posx;
        n.muovides();
        if (n.posx==s.posx&&n.posy==s.posy){
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          if (posatt!=n.posx){ 
            document.getElementById(`px${n.posx-(n.posx-posatt)}py${n.posy}`).src="image/casella.png";
          }
          ncoincs=true;
        }
        else{
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          if (posatt!=n.posx){ 
            document.getElementById(`px${n.posx-(n.posx-posatt)}py${n.posy}`).src="image/casella.png";
          }
          ncoincs=false;
        }
      break;
      case 'A':
      case 'a': 
        posatt=n.posx;
        n.muovisin();
        if (n.posx==s.posx&&n.posy==s.posy){
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          if (posatt!=n.posx){ 
            document.getElementById(`px${n.posx+(posatt-n.posx)}py${n.posy}`).src="image/casella.png";
          }
          ncoincs=true;
        }
        else{
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          if (posatt!=n.posx){ 
            document.getElementById(`px${n.posx+(posatt-n.posx)}py${n.posy}`).src="image/casella.png";
          }
          ncoincs=false;
        }
      break;
      case 'W':
      case 'w': 
        posatt=n.posy;
        n.muovisu();
        if (n.posx==s.posx&&n.posy==s.posy){
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          if (posatt!=n.posy){ 
            document.getElementById(`px${n.posx}py${n.posy+(posatt-n.posy)}`).src="image/casella.png";
          }
          ncoincs=true;
        }
        else{
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          if (posatt!=n.posy){ 
            document.getElementById(`px${n.posx}py${n.posy+(posatt-n.posy)}`).src="image/casella.png";
          }
          ncoincs=false;
        }
      break;
      case 'S':
      case 's': 
        posatt=n.posy;
        n.muovigiu();
        if (n.posx==s.posx&&n.posy==s.posy){
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          if (posatt!=n.posy){ 
            document.getElementById(`px${n.posx}py${n.posy-(n.posy-posatt)}`).src="image/casella.png";
          }
          ncoincs=true;
        }
        else{
          document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
          if (posatt!=n.posy){ 
            document.getElementById(`px${n.posx}py${n.posy-(n.posy-posatt)}`).src="image/casella.png";
          }
          ncoincs=false;
        }
      break;
      case 'L':
      case 'l':
        let intervcan;
        if (!n.cooldowncan){
          n.cooldowncan=true;
          if((n.can.git+n.posx >= s.posx && n.posx-n.can.git <= s.posx) && (n.posy+n.can.git >= s.posy && n.posy-n.can.git <= s.posy ))
          {
            s.vit = s.vit-n.can.dan;
            if(s.vit <= 0)
            {
              fine(true);
            }
            else
            {
              updateHealthBar(document.querySelector(".health"), s.vit);
            }
          }
          setTimeout(()=>{n.cooldowncan=false;},10000);
          let tempo=1*10;
          document.getElementById("cann").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;
          tempo--;
          intervcan=setInterval(()=>{if (tempo==0){document.getElementById("cann").innerHTML="PRONTO";clearInterval(intervcan)}else{tempo=updateCountdown("cann",tempo,intervcan)}},1000);
        }
        else{
          document.getElementById("cann").innerHTML="Cannone in cooldown";
        }
      break;
      case 'K':
      case 'k': 
        n.aSpec(s);
      break;
    }
    }
}
var path = window.location.pathname;
var page = path.split("/").pop();
if (page=="gameplay.htm"){
  document.addEventListener("DOMContentLoaded",inizia);
  document.addEventListener("DOMContentLoaded",avviaCountdown);
  document.addEventListener("DOMContentLoaded",function(){updateHealthBar(document.querySelector(".health"), s.vit);})
}
if (page!="gameplay.htm"&&page!="index.htm"){
  document.addEventListener("keydown",(e)=>{if(e.key){history.back()}});
}

function updateHealthBar(healthBar, value) {
  value = Math.round(value);
  healthBar.querySelector(".health__fill").style.width = `${value}%`;
  healthBar.querySelector(".health__text").textContent = `${value} HP`;
}  

let refreshIntervalId;

function avviaCountdown(){
  let tempo=7*60;
  document.getElementById("countdown").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60+"0";
  tempo--;
  refreshIntervalId=setInterval(()=>{tempo=updateCountdown("countdown",tempo,refreshIntervalId)}, 1000);
}
function updateCountdown(id,temp,int) {
    const minuti = Math.floor(temp / 60); 
    let secondi = temp % 60;

    secondi = secondi < 10 ? '0' + secondi : secondi; 
    const contdownEl = document.getElementById(id);
    contdownEl.innerHTML = `${minuti}:${secondi}`;

    temp--;

    if (temp < 0) { 
        clearInterval(int);
        fine();
    }
    return temp;
}

function fine(esito){
  if (esito){
    clearInterval(refreshIntervalId);
    clearInterval(interv);
    document.getElementById("cont").innerHTML="HAI VINTO";
  }
  else{
    document.getElementById("cont").innerHTML="HAI PERSO";
  }
}
