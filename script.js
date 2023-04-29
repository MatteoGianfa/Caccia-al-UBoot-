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
function gameplay(n){
  window.location.href = "gameplay.htm";
}
function inizia(){
  let t="";
  for(let i = 0; i < 40; i++) {
    for(let j = 0; j< 40; j++) {
        t+=`<div class="casella" id="pos${i}${j}">${i+1}</div>`;
    }
    t+="<br>";
  }
  document.getElementById("campo").innerHTML=t;
}
if (document.URL == "file:///C:/Users/admin/Downloads/Caccia-al-UBoot--main/Caccia-al-UBoot--main/gameplay.htm"){
  document.addEventListener("DOMContentLoaded", inizia, false);
}
