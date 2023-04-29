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
  for(var i = 0; i < 40; i++) {
    for(var j = 0; j< 40; j++) {
        var div = document.createElement("div");
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.background = "red";
        var jump = document.createElement("br");
        document.getElementById("container").appendChild(jump);
        document.getElementById("container").appendChild(div);
    }
  }
}
