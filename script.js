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
  inizia(1);
}
function nave2(){
  inizia(2);
}
function nave3(){
  inizia(3);
}
function nave4(){
  inizia(4);
}
function inizia(n){
  window.location.href = "gameplay.htm";
  let t;
  for(let i = 0; i < 40; i++) {
    for(let j = 0; j< 40; j++) {
        t+=`<div>${i+1}</div>`;
    }
    t+="<br>";
  }
  document.getElementById("campo").innerHTML="ciao";
}
