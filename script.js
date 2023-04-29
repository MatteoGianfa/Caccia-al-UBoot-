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
function gameplay(n){
  window.location.href = "gameplay.htm";
}
