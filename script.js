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
  for(let i = 0; i < 40; i++) {
    for(let j = 0; j< 40; j++) {
        document.createElement("div");
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.backgroundColor = "red";
        let jump = document.createElement("br");
        document.getElementById("campo").appendChild(div);
    }
    document.getElementById("campo").appendChild(jump);
  }
}
