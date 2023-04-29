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
  setInterval(inizia,2000);
  inizia(1);
}
function nave2(){
  gameplay();
  setTimeout(2000);
  inizia(2);
}
function nave3(){
  gameplay();
  setTimeout(2000);
  inizia(3);
}
function nave4(){
  gameplay();
  setTimeout(2000);
  inizia(4);
}
function gameplay(n){
  window.location.href = "gameplay.htm";
}
function inizia(){
  console.log("ciao");
  let t;
  for(let i = 0; i < 40; i++) {
    for(let j = 0; j< 40; j++) {
        t+=`<div>${i+1}</div>`;
    }
    t+="<br>";
  }
  document.getElementById("campo").innerHTML="ciao";
}
