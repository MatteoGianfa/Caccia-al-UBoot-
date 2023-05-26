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

class Bomba{	
  #posx	
  #posy	
  constructor(posx,posy){	
    this.posx=posx;	
    this.posy=posy;	
  }	
  get posx(){	
    return this.#posx;	
  }	
  set posx(posx){	
    this.#posx=posx;	
  }	
  get posy(){	
    return this.#posy;	
  }	
  set posy(posy){	
    this.#posy=posy;	
  }	
}

class ILHMS extends Nave{
  #b1	
  #b2	
  #b3
  #utilmin
  constructor(mov,vis,son,can,util){
    super(mov,vis,son,can,util);
    this.#b1=null;	
    this.#b2=null;	
    this.#b3=null;
    this.utilmin=false;
  }	

  get utilmin(){
    return this.#utilmin;
  }

  set utilmin(utilmin){
    this.#utilmin=utilmin;
  }

  get b1(){	
    return this.#b1;	
  }	
  get b2(){	
    return this.#b2;	
  }	
  get b3(){	
    return this.#b3;	
  }	
  set b1(b1){	
    this.#b1=b1;	
  }	
  set b2(b2){	
    this.#b2=b2;	
  }	
  set b3(b3){	
    this.#b3=b3;
  }

  aSpec(s){
    if (this.util!=0){
      if (!this.cooldownaspec){
        this.cooldownaspec=true;
        let intervasp;
        this.util--;
        if (this.posx+2>=s.posx&&this.posx-2<=s.posx&&this.posy+2>=s.posy&&this.posy-2<=s.posy){
          s.vit=s.vit-35;
          if (s.vit<=0){
            fine(true);
          }
          else{
            updateHealthBar(document.querySelector(".health"),s.vit);
          }	
        }
        else{	
          this.utilmin=true;
          if (this.util==2){	
            this.b1=new Bomba(this.posx,this.posy);
          }	
          if (this.util==1){	
            this.b2=new Bomba(this.posx,this.posy);
          }	
          if (this.util==0){	
            this.b3=new Bomba(this.posx,this.posy);
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
  #trov

  constructor(mov,vis,son,can,util1,util2,util3){
    super(mov,vis,son,can);
    this.cooldownaspec1=false;
    this.cooldownaspec2=false;
    this.cooldownaspec3=false;
    this.util1=util1;
    this.util2=util2;
    this.util3=util3;
    this.trov=false;	
  }	
  get trov(){	
    return this.#trov;	
  }	
  set trov(trov){	
    this.#trov=trov;
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
            fine(true);
          }
          else{
            updateHealthBar(document.querySelector(".health"),s.vit);
          }
        }
        setTimeout(()=>{this.cooldownaspec1=false;},20000);	
        let tempo=1*20;	
        document.getElementById("aspec1").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;	
        tempo--;	
        intervasp=setInterval(()=>{if (tempo==0){document.getElementById("aspec1").innerHTML="PRONTO";clearInterval(intervasp)}else{tempo=updateCountdown("aspec1",tempo,intervasp)}},1000);
      }
      else{
        document.getElementById("aspec1").innerHTML="Armamento in cooldown";
      }
    }
  }
  
  aSpec2(s){
    if (this.util2!=0){
      if (!this.cooldownaspec2){
        this.cooldownaspec2=true;
        let intervasp;
        this.util2--;
        if ((s.posx<=this.posx+10&&s.posx>=this.posx-10&&s.posy<=this.posy+3&&s.posy>=this.posy-3)||(s.posy<=this.posy+10&&s.posy>=this.posy-10&&s.posx<=this.posx+3&&s.posx>=this.posx-3)){
          let pxtemp=s.posx;	
          let pytemp=s.posy;
          document.getElementById(`px${pxtemp}py${pytemp}`).src="image/casellar.png";
          this.trov=true;	
          setTimeout(()=>{if (pxtemp!=this.posx||pytemp!=this.posy){document.getElementById(`px${pxtemp}py${pytemp}`).src="image/casella.png"; this.trov=false}},5000);
        }
        setTimeout(()=>{this.cooldownaspec2=false;},20000);	
        let tempo=1*20;	
        document.getElementById("aspec2").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;	
        tempo--;	
        intervasp=setInterval(()=>{if (tempo==0){document.getElementById("aspec2").innerHTML="PRONTO";clearInterval(intervasp)}else{tempo=updateCountdown("aspec2",tempo,intervasp)}},1000);
      }
      else{
        document.getElementById("aspec2").innerHTML="Armamento in cooldown";
      }
    }
  }

  aSpec3(s){
    if (this.util3!=0){
      if (!this.cooldownaspec3){
        this.cooldownaspec3=true;
        let intervasp;
        this.util3--;
        let num1=0;	
        let num2=0;
        if ((s.posx<=this.posx+8&&s.posx>=this.posx-8&&s.posy<=this.posy+3&&s.posy>=this.posy-3)||(s.posy<=this.posy+8&&s.posy>=this.posy-8&&s.posx<=this.posx+3&&s.posx>=this.posx-3)){
          let pxtemp=s.posx;	
          let pytemp=s.posy;
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
          document.getElementById("aspec3").innerHTML="Caselle distanza: "+Math.floor(Math.sqrt(num1+num2))+"<div id='aspec3cool'>";
        }
        if (num1==0&&num2==0){	
          document.getElementById("aspec3").innerHTML="Uboat non trovato";	
        }	
        setTimeout(()=>{document.getElementById("aspec3").innerHTML=""},5000);
        if (this.util==0){
          document.getElementById("aspec3").innerHTML="Armamento Esaurito";
        }
        else{
          setTimeout(()=>{this.cooldownaspec3=false;},20000);
          let tempo=1*20;
          document.getElementById("aspec3cool").innerHTML=Math.floor(tempo / 60)+":"+tempo % 60;
          tempo--;
          intervasp=setInterval(()=>{if (tempo==0){document.getElementById("aspec3cool").innerHTML="PRONTO";clearInterval(intervasp)}else{tempo=updateCountdown("aspec3cool",tempo,intervasp)}},1000);
        }
      }
      else{
        document.getElementById("aspec3cool").innerHTML="<br>Armamento in cooldown";
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
    if (this.#posy+this.#mov<=39){
      this.#posy=this.#posy+this.#mov;
    }
  }
  muovisin(){
    if (this.#posx-this.#mov>=0){
      this.#posx=this.#posx-this.#mov;
    }
  }
  muovides(){
    if (this.#posx+this.#mov<=39){
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
  t+="<tr class='campogioco'>";
  t+="<th class='campogioco'>/</th>"
  for (let i=0;i<40;i++){
    if (i+1<=26){
      t+=`<th class='campogioco'>${String.fromCharCode(i+65)}</th>`;
    }
    else{
      t+=`<th class='campogioco'>${String.fromCharCode(i+71)}</th>`;
    }
  }
  t+="</tr>"
  for(let i = 0; i < 40; i++) {
    t+="<tr class='campogioco'>"
    t+=`<th>${i+1}</th>`;
    for(let j = 0; j< 40; j++) {
        t+=`<td class='campogioco'><img class="casella" src="image/casella.png" id="px${j}py${i}"></td>`;
    }
    t+="</tr>";
  }
  t+="</table>";
  document.getElementById("campo").innerHTML=t;
  if (n instanceof PHMS){
    document.getElementById("abilita").innerHTML+="<div class='para'>Cannone Inesistente</div>";
    document.getElementById("abilita").innerHTML+="<div class='desc'>Armamento Speciale</div>";
    document.getElementById("abilita").innerHTML+="<div class='para'>Aereo Cannoniere Tasto:P</div>";
    document.getElementById("abilita").innerHTML+="<div id='aspec1' class='desc'>PRONTO</div>";
    document.getElementById("abilita").innerHTML+="<div class='para'>Aereo Ricognitore Tasto:O</div>";
    document.getElementById("abilita").innerHTML+="<div id='aspec2' class='desc'>PRONTO</div>";
    document.getElementById("abilita").innerHTML+="<div class='para'>Aereo Sonar Tasto: I</div>";
    document.getElementById("abilita").innerHTML+="<div id='aspec3cool' class='desc'>PRONTO</div><br><div class='desc' id='aspec3'></div>";
  }
  else{
    document.getElementById("abilita").innerHTML+="<div class='para'>Cannone</div>";
    document.getElementById("abilita").innerHTML+="<div id='cann' class='desc'>PRONTO</div>";
    document.getElementById("abilita").innerHTML+="<div class='para'>Armamento Speciale</div>";
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
  setTimeout(function(){statos=true; setTimeout(function(){statos=false; document.getElementById(`px${s.posx}py${s.posy}`).src="image/casella.png"; cambiastato();},30000)},50);
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
            if (!s.trov){	
              if (pxatt==n.posx){
                document.getElementById(`px${pxatt}py${pyatt}`).src="image/casellav.png";
              }
              else{
                if (pxatt!=s.posx){	
                  document.getElementById(`px${pxatt}py${s.posy}`).src="image/casella.png";	
                }	
              }
            }
            scoincn=true;
          }
          else{
            document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
            if ((!scoincn&&!ncoincs)){	
              if (pxatt!=s.posx){	
                document.getElementById(`px${pxatt}py${s.posy}`).src="image/casella.png";	
              }
            }
            else{
              scoincn=false;
            }
          }
        }
        else{
          document.getElementById(`px${s.posx}py${s.posy}`).src="image/casella.png";
          document.getElementById(`px${pxatt}py${pyatt}`).src="image/casella.png";
        }
      }
      if (n instanceof ILHMS){	
        if (n.b1!=null){
          if (s.posx+2>=n.b1.posx&&s.posx-2<=n.b1.posx&&s.posy+2>=n.b1.posy&&s.posy-2<=n.b1.posy){
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src="image/casella.png";
            n.b1=null;
          }	
        }	
        if (n.b2!=null){	
          if (s.posx+2>=n.b2.posx&&s.posx-2<=n.b2.posx&&s.posy+2>=n.b2.posy&&s.posy-2<=n.b2.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src="image/casella.png";
            n.b2=null;	
          }	
        }	
        if (n.b3!=null){	
          if (s.posx+2>=n.b3.posx&&s.posx-2<=n.b3.posx&&s.posy+2>=n.b3.posy&&s.posy-2<=n.b3.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src="image/casella.png";
            n.b3=null;	
          }
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
            if (!s.trov){	
              if (pxatt==n.posx){
                document.getElementById(`px${pxatt}py${pyatt}`).src="image/casellav.png";
              }
              else{
                if (pxatt!=s.posx){	
                  document.getElementById(`px${pxatt}py${s.posy}`).src="image/casella.png";	
                }	
              }
            }
            scoincn=true;
          }
          else{
            document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
            if ((!scoincn&&!ncoincs)){	
              if (pxatt!=s.posx){	
                document.getElementById(`px${pxatt}py${s.posy}`).src="image/casella.png";	
              }
            }
            else{
              scoincn=false;
            }
          }
        }
        else{
          document.getElementById(`px${s.posx}py${s.posy}`).src="image/casella.png";
          document.getElementById(`px${pxatt}py${pyatt}`).src="image/casella.png";
        }
      }	
      if (n instanceof ILHMS){	
        if (n.b1!=null){	
          if (s.posx+2>=n.b1.posx&&s.posx-2<=n.b1.posx&&s.posy+2>=n.b1.posy&&s.posy-2<=n.b1.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src="image/casella.png";
            n.b1=null;	
          }	
        }	
        if (n.b2!=null){	
          if (s.posx+2>=n.b2.posx&&s.posx-2<=n.b2.posx&&s.posy+2>=n.b2.posy&&s.posy-2<=n.b2.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src="image/casella.png";
            n.b2=null;	
          }	
        }	
        if (n.b3!=null){	
          if (s.posx+2>=n.b3.posx&&s.posx-2<=n.b3.posx&&s.posy+2>=n.b3.posy&&s.posy-2<=n.b3.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src="image/casella.png";
            n.b3=null;	
          }
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
            if (!s.trov){	
              if (pyatt==n.posy){
                document.getElementById(`px${pxatt}py${pyatt}`).src="image/casellav.png";
              }
              else{
                if (pyatt!=s.posy){	
                  document.getElementById(`px${pxatt}py${pyatt}`).src="image/casella.png";	
                }	
              }
            }
            scoincn=true;
          }
          else{
            document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
            if ((!scoincn&&!ncoincs)){	
              if (s.posy!=pyatt){	
                document.getElementById(`px${s.posx}py${pyatt}`).src="image/casella.png";	
              }
            }
            else{
              scoincn=false;
            }
          }
        }
        else{
          document.getElementById(`px${s.posx}py${s.posy}`).src="image/casella.png";
          document.getElementById(`px${pxatt}py${pyatt}`).src="image/casella.png";
        }
      }	
      if (n instanceof ILHMS){	
        if (n.b1!=null){	
          if (s.posx+2>=n.b1.posx&&s.posx-2<=n.b1.posx&&s.posy+2>=n.b1.posy&&s.posy-2<=n.b1.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src="image/casella.png";
            n.b1=null;	
          }	
        }	
        if (n.b2!=null){	
          if (s.posx+2>=n.b2.posx&&s.posx-2<=n.b2.posx&&s.posy+2>=n.b2.posy&&s.posy-2<=n.b2.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src="image/casella.png";
            n.b2=null;	
          }	
        }	
        if (n.b3!=null){	
          if (s.posx+2>=n.b3.posx&&s.posx-2<=n.b3.posx&&s.posy+2>=n.b3.posy&&s.posy-2<=n.b3.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src="image/casella.png";
            n.b3=null;	
          }
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
            if (!s.trov){	
              if (pyatt==n.posy){
                document.getElementById(`px${pxatt}py${pyatt}`).src="image/casellav.png";
              }
              else{
                if (pyatt!=s.posy){	
                  document.getElementById(`px${pxatt}py${pyatt}`).src="image/casella.png";	
                }	
              }
            }
            scoincn=true;
          }
          else{
            document.getElementById(`px${s.posx}py${s.posy}`).src="image/casellar.png";
            if ((!scoincn&&!ncoincs)){	
              if (s.posy!=pyatt){	
                document.getElementById(`px${s.posx}py${pyatt}`).src="image/casella.png";	
              }
            }
            else{
              scoincn=false;
            }
          }
        }
        else{
          document.getElementById(`px${s.posx}py${s.posy}`).src="image/casella.png";
          document.getElementById(`px${pxatt}py${pyatt}`).src="image/casella.png";
        }
      }	
      if (n instanceof ILHMS){	
        if (n.b1!=null){	
          if (s.posx+2>=n.b1.posx&&s.posx-2<=n.b1.posx&&s.posy+2>=n.b1.posy&&s.posy-2<=n.b1.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src="image/casella.png";
            n.b1=null;	
          }	
        }	
        if (n.b2!=null){	
          if (s.posx+2>=n.b2.posx&&s.posx-2<=n.b2.posx&&s.posy+2>=n.b2.posy&&s.posy-2<=n.b2.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src="image/casella.png";
            n.b2=null;	
          }	
        }	
        if (n.b3!=null){	
          if (s.posx+2>=n.b3.posx&&s.posx-2<=n.b3.posx&&s.posy+2>=n.b3.posy&&s.posy-2<=n.b3.posy){	
            s.vit=s.vit-35;	
            if (s.vit<=0){	
              fine();	
            }	
            else{	
              updateHealthBar(document.querySelector(".health"),s.vit);	
            }	
            document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src="image/casella.png";
            n.b3=null;	
          }
        }
      }
    break;
  }
}
let possmov=true;
let utilmin=false;
function movimenton(event){
    if (possmov){
      possmov=false;
      setTimeout(()=>{possmov=true},150);
      let posatt;
      switch (event.key){
        case 'D':
        case 'd':
          posatt=n.posx;
          n.muovides();
          if (n.posx==s.posx&&n.posy==s.posy){
            document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
            if (posatt!=n.posx){ 
              if (n.utilmin){
                n.utilmin=false;
                document.getElementById(`px${n.posx-(n.posx-posatt)}py${n.posy}`).src="image/mina.png";
              }
              else{
                document.getElementById(`px${n.posx-(n.posx-posatt)}py${n.posy}`).src="image/casella.png";
              }
            }
            ncoincs=true;
          }
          else{
            document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
            if (posatt!=n.posx){ 
              if (n.utilmin){
                n.utilmin=false;
                document.getElementById(`px${n.posx-(n.posx-posatt)}py${n.posy}`).src="image/mina.png";
              }
              else{
                document.getElementById(`px${n.posx-(n.posx-posatt)}py${n.posy}`).src="image/casella.png";
              }
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
              if (n.utilmin){
                n.utilmin=false;
                document.getElementById(`px${n.posx+(posatt-n.posx)}py${n.posy}`).src="image/mina.png";
              }
              else{
                document.getElementById(`px${n.posx+(posatt-n.posx)}py${n.posy}`).src="image/casella.png";
              }
            }
            ncoincs=true;
          }
          else{
            document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
            if (posatt!=n.posx){ 
              if (n.utilmin){
                n.utilmin=false;
                document.getElementById(`px${n.posx+(posatt-n.posx)}py${n.posy}`).src="image/mina.png";
              }
              else{
                document.getElementById(`px${n.posx+(posatt-n.posx)}py${n.posy}`).src="image/casella.png";
              }
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
              if (n.utilmin){
                n.utilmin=false;
                document.getElementById(`px${n.posx}py${n.posy+(posatt-n.posy)}`).src="image/mina.png";
              }
              else{
                document.getElementById(`px${n.posx}py${n.posy+(posatt-n.posy)}`).src="image/casella.png";
              }
            }
            ncoincs=true;
          }
          else{
            document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
            if (posatt!=n.posy){
              if (n.utilmin){
                n.utilmin=false;
                document.getElementById(`px${n.posx}py${n.posy+(posatt-n.posy)}`).src="image/mina.png";
              }
              else{
                document.getElementById(`px${n.posx}py${n.posy+(posatt-n.posy)}`).src="image/casella.png";
              }
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
              if (n.utilmin){
                n.utilmin=false;
                document.getElementById(`px${n.posx}py${n.posy-(n.posy-posatt)}`).src="image/mina.png";
              }
              else{
                document.getElementById(`px${n.posx}py${n.posy-(n.posy-posatt)}`).src="image/casella.png";
              }
            }
            ncoincs=true;
          }
          else{
            document.getElementById(`px${n.posx}py${n.posy}`).src="image/casellav.png";
            if (posatt!=n.posy){ 
              if (n.utilmin){
                n.utilmin=false;
                document.getElementById(`px${n.posx}py${n.posy-(n.posy-posatt)}`).src="image/mina.png";
              }
              else{
                document.getElementById(`px${n.posx}py${n.posy-(n.posy-posatt)}`).src="image/casella.png";
              }
            }
            ncoincs=false;
          }
        break;
        case 'L':
        case 'l':
          if (!(n instanceof PHMS)){	
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
        }
        break;
        case 'K':
        case 'k':	
          if (!(n instanceof PHMS)){
            n.aSpec(s);
          }
        break;	
        case 'P':	
        case 'p':	
          if (n instanceof PHMS){	
            n.aSpec1(s);	
          }
        break;
        case 'O':	
        case 'o':	
          if (n instanceof PHMS){	
            n.aSpec2(s);	
          }	
        break;	
        case 'I':	
        case 'i':	
          if (n instanceof PHMS){	
            n.aSpec3(s);	
          }	
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

if (page!="gameplay.htm"&&page!="index.htm"&&page!="fine.htm"){
  document.addEventListener("keyup",(e)=>{if(e.key == "Escape"){history.back()}});
}

if (page=="fine.htm"){
  document.addEventListener("DOMContentLoaded",rigioca);
}

function rigioca(){
  let urlParams2=new URLSearchParams(window.location.search); 
  let esit=urlParams2.get("esit");
 if (esit=="true"){
    document.getElementById("aaa").innerHTML+="<div class='titolo'>HAI VINTO</div><br><div class='schermata_f'>Congratulazioni!</div><input type='button' class='bott2' value='Rigioca' onclick='restart()'>";
  }
  else{
    document.getElementById("aaa").innerHTML+="<div class='titolo'>HAI PERSO</div><br><div class='schermata_f'>Peccato!</div><input type='button' class='bott2' value='Rigioca' onclick='restart()'>";
  }
}

function restart(){
  window.location.href="index.htm";
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
        fine(false);
    }
    return temp;
}
function fine(esito){
  if (esito){
    window.location.href=`fine.htm?esit=${esito}`;
  }
  else{
    window.location.href=`fine.htm?esit=${esito}`;
  }
}
