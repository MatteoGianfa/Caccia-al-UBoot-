if (screen.width <= 768) {
  class Nave {
    #mov
    #vis
    #son
    #can
    #posx
    #posy
    #util
    #cooldowncan
    #cooldownaspec
    constructor(mov, vis, son, can, util) {
      this.mov = mov;
      this.#vis = vis;
      this.#son = son;
      this.#can = can;
      this.#posx = 0;
      this.#posy = 0;
      this.util = util;
      this.cooldowncan = false;
      this.cooldownaspec = false;
    }
    get cooldowncan() {
      return this.#cooldowncan;
    }
    set cooldowncan(cooldowncan) {
      this.#cooldowncan = cooldowncan;
    }
    get cooldownaspec() {
      return this.#cooldownaspec;
    }
    set cooldownaspec(cooldownaspec) {
      this.#cooldownaspec = cooldownaspec;
    }
    set util(util) {
      this.#util = util;
    }
    set mov(mov) {
      this.#mov = mov;
    }
    get util() {
      return this.#util;
    }
    get mov() {
      return this.#mov;
    }
    get vis() {
      return this.#vis;
    }
    get son() {
      return this.#son;
    }
    get can() {
      return this.#can;
    }
    get posx() {
      return this.#posx;
    }
    get posy() {
      return this.#posy;
    }
    muovisu() {
      if (this.#posy - this.#mov >= 0) {
        this.#posy = this.#posy - this.#mov;
      }
      else {
        this.#posy = 0;
      }
    }
    muovigiu() {
      if (this.#posy + this.#mov < 19) {
        this.#posy = this.#posy + this.#mov;
      }
      else {
        this.#posy = 19;
      }
    }
    muovisin() {
      if (this.#posx - this.#mov >= 0) {
        this.#posx = this.#posx - this.#mov;
      }
      else {
        this.#posx = 0;
      }
    }
    muovides() {
      if (this.#posx + this.#mov < 19) {
        this.#posx = this.#posx + this.#mov;
      }
      else {
        this.#posx = 19;
      }
    }
  }

  class CHMS extends Nave {

    constructor(mov, vis, son, can, util) {
      super(mov, vis, son, can, util);
    }

    aSpec(s) {
      if (this.util != 0) {
        if (!this.cooldownaspec) {
          let audio=new Audio("sounds/armspar.mp3");
          audio.play();
          this.cooldownaspec = true;
          let intervasp;
          this.util--;
          if (this.posx + 1 >= s.posx && this.posx - 1 <= s.posx && this.posy + 1 >= s.posy && this.posy - 1 <= s.posy) {
            console.log(this.util);
            s.vit = s.vit - 40;
            if (s.vit <= 0) {
              fine(true);
            }
            else {
              updateHealthBar(document.querySelector(".health"), s.vit);
            }
          }
          if (this.util == 0) {
            document.getElementById("aspec").innerHTML = "Armamento Esaurito";
          }
          else {
            setTimeout(() => { this.cooldownaspec = false; }, 20000);
            let tempo = 1 * 20;
            document.getElementById("aspec").innerHTML = Math.floor(tempo / 60) + ":" + tempo % 60;
            tempo--;
            intervasp = setInterval(() => { if (tempo == 0) { document.getElementById("aspec").innerHTML = "PRONTO"; clearInterval(intervasp) } else { tempo = updateCountdown("aspec", tempo, intervasp) } }, 1000);
          }
        }
        else {
          document.getElementById("aspec").innerHTML = "Armamento in cooldown";
        }
      }
    }

  }

  class Bomba {
    #posx
    #posy
    constructor(posx, posy) {
      this.posx = posx;
      this.posy = posy;
    }
    get posx() {
      return this.#posx;
    }
    set posx(posx) {
      this.#posx = posx;
    }
    get posy() {
      return this.#posy;
    }
    set posy(posy) {
      this.#posy = posy;
    }
  }

  class ILHMS extends Nave {
    #b1
    #b2
    #b3
    #utilmin
    constructor(mov, vis, son, can, util) {
      super(mov, vis, son, can, util);
      this.#b1 = null;
      this.#b2 = null;
      this.#b3 = null;
      this.utilmin = false;
    }

    get utilmin() {
      return this.#utilmin;
    }

    set utilmin(utilmin) {
      this.#utilmin = utilmin;
    }

    get b1() {
      return this.#b1;
    }
    get b2() {
      return this.#b2;
    }
    get b3() {
      return this.#b3;
    }
    set b1(b1) {
      this.#b1 = b1;
    }
    set b2(b2) {
      this.#b2 = b2;
    }
    set b3(b3) {
      this.#b3 = b3;
    }

    aSpec(s) {
      if (this.util != 0) {
        if (!this.cooldownaspec) {
          let audio=new Audio("sounds/bomba.mp3");
          audio.play();
          this.cooldownaspec = true;
          let intervasp;
          this.util--;
          if (this.posx + 2 >= s.posx && this.posx - 2 <= s.posx && this.posy + 2 >= s.posy && this.posy - 2 <= s.posy) {
            s.vit = s.vit - 35;
            if (s.vit <= 0) {
              fine(true);
            }
            else {
              updateHealthBar(document.querySelector(".health"), s.vit);
            }
          }
          else {
            this.utilmin = true;
            if (this.util == 2) {
              this.b1 = new Bomba(this.posx, this.posy);
            }
            if (this.util == 1) {
              this.b2 = new Bomba(this.posx, this.posy);
            }
            if (this.util == 0) {
              this.b3 = new Bomba(this.posx, this.posy);
            }
          }
          if (this.util == 0) {
            document.getElementById("aspec").innerHTML = "Armamento Esaurito";
          }
          else {
            setTimeout(() => { this.cooldownaspec = false; }, 20000);
            let tempo = 1 * 20;
            document.getElementById("aspec").innerHTML = Math.floor(tempo / 60) + ":" + tempo % 60;
            tempo--;
            intervasp = setInterval(() => { if (tempo == 0) { document.getElementById("aspec").innerHTML = "PRONTO"; clearInterval(intervasp) } else { tempo = updateCountdown("aspec", tempo, intervasp) } }, 1000);
          }
        }
        else {
          document.getElementById("aspec").innerHTML = "Armamento in cooldown";
        }
      }
    }

  }


  class CorHMS extends Nave {

    constructor(mov, vis, son, can, util) {
      super(mov, vis, son, can, util);
    }

    aSpec() {
      if (this.util != 0) {
        if (!this.cooldownaspec) {
          let audio=new Audio("sounds/spboost.mp3");
          audio.play();
          this.cooldownaspec = true;
          let intervasp;
          this.util--;
          console.log(this.mov);
          this.mov = 4;
          setTimeout(() => { this.mov = 2 }, 7000);
          if (this.util == 0) {
            document.getElementById("aspec").innerHTML = "Armamento Esaurito";
          }
          else {
            setTimeout(() => { this.cooldownaspec = false; }, 20000);
            let tempo = 1 * 20;
            document.getElementById("aspec").innerHTML = Math.floor(tempo / 60) + ":" + tempo % 60;
            tempo--;
            intervasp = setInterval(() => { if (tempo == 0) { document.getElementById("aspec").innerHTML = "PRONTO"; clearInterval(intervasp) } else { tempo = updateCountdown("aspec", tempo, intervasp) } }, 1000);
          }
        }
        else {
          document.getElementById("aspec").innerHTML = "Armamento in cooldown";
        }
      }
    }
  }

  class IPHMS extends Nave {

    constructor(mov, vis, son, can, util) {
      super(mov, vis, son, can, util);
    }

    aSpec(s) {
      if (this.util != 0) {
        if (!this.cooldownaspec) {
          let audio=new Audio("sounds/armspar.mp3");
          audio.play();
          this.cooldownaspec = true;
          let intervasp;
          this.util--;
          if (this.posx + 5 >= s.posx && this.posx - 5 <= s.posx && this.posy + 5 >= s.posy && this.posy - 5 <= s.posy) {
            s.vit = s.vit - 30;
            if (s.vit <= 0) {
              fine(true);
            }
            else {
              updateHealthBar(document.querySelector(".health"), s.vit);
            }
          }
          if (this.util == 0) {
            document.getElementById("aspec").innerHTML = "Armamento Esaurito";
          }
          else {
            setTimeout(() => { this.cooldownaspec = false; }, 20000);
            let tempo = 1 * 20;
            document.getElementById("aspec").innerHTML = Math.floor(tempo / 60) + ":" + tempo % 60;
            tempo--;
            intervasp = setInterval(() => { if (tempo == 0) { document.getElementById("aspec").innerHTML = "PRONTO"; clearInterval(intervasp) } else { tempo = updateCountdown("aspec", tempo, intervasp) } }, 1000);
          }
        }
        else {
          document.getElementById("aspec").innerHTML = "Armamento in cooldown";
        }
      }
    }
  }

  class PHMS extends Nave {

    #cooldownaspec1
    #cooldownaspec2
    #cooldownaspec3
    #util1
    #util2
    #util3
    #trov

    constructor(mov, vis, son, can, util1, util2, util3) {
      super(mov, vis, son, can);
      this.cooldownaspec1 = false;
      this.cooldownaspec2 = false;
      this.cooldownaspec3 = false;
      this.util1 = util1;
      this.util2 = util2;
      this.util3 = util3;
      this.trov = false;
    }
    get trov() {
      return this.#trov;
    }
    set trov(trov) {
      this.#trov = trov;
    }

    get util1() {
      return this.#util1;
    }

    get util2() {
      return this.#util2;
    }

    get util3() {
      return this.#util3;
    }

    set util1(util1) {
      this.#util1 = util1;
    }

    set util2(util2) {
      this.#util2 = util2;
    }

    set util3(util3) {
      this.#util3 = util3;
    }

    get cooldownaspec1() {
      return this.#cooldownaspec1;
    }

    get cooldownaspec2() {
      return this.#cooldownaspec2;
    }

    get cooldownaspec3() {
      return this.#cooldownaspec3;
    }

    set cooldownaspec1(cooldownaspec1) {
      this.#cooldownaspec1 = cooldownaspec1;
    }

    set cooldownaspec2(cooldownaspec2) {
      this.#cooldownaspec2 = cooldownaspec2;
    }

    set cooldownaspec3(cooldownaspec3) {
      this.#cooldownaspec3 = cooldownaspec3;
    }

    aSpec1(s) {
      if (this.util1 != 0) {
        if (!this.cooldownaspec1) {
          let audio=new Audio("sounds/armaer.mp3");
          audio.play();
          this.cooldownaspec1 = true;
          let intervasp;
          this.util--;
          if (this.posx + 4 >= s.posx && this.posx - 4 <= s.posx && this.posy + 4 >= s.posy && this.posy - 4 <= s.posy) {
            s.vit = s.vit - 30;
            if (s.vit <= 0) {
              fine(true);
            }
            else {
              updateHealthBar(document.querySelector(".health"), s.vit);
            }
          }
          setTimeout(() => { this.cooldownaspec1 = false; }, 20000);
          let tempo = 1 * 20;
          document.getElementById("aspec1").innerHTML = Math.floor(tempo / 60) + ":" + tempo % 60;
          tempo--;
          intervasp = setInterval(() => { if (tempo == 0) { document.getElementById("aspec1").innerHTML = "PRONTO"; clearInterval(intervasp) } else { tempo = updateCountdown("aspec1", tempo, intervasp) } }, 1000);
        }
        else {
          document.getElementById("aspec1").innerHTML = "Armamento in cooldown";
        }
      }
    }

    aSpec2(s) {
      if (this.util2 != 0) {
        if (!this.cooldownaspec2) {
          this.cooldownaspec2 = true;
          let intervasp;
          this.util2--;
          if ((s.posx <= this.posx + 8 && s.posx >= this.posx - 8 && s.posy <= this.posy + 3 && s.posy >= this.posy - 3) || (s.posy <= this.posy + 8 && s.posy >= this.posy - 8 && s.posx <= this.posx + 3 && s.posx >= this.posx - 3)) {
            let pxtemp = s.posx;
            let pytemp = s.posy;
            document.getElementById(`px${pxtemp}py${pytemp}`).src = "image/casellar.png";
            this.trov = true;
            setTimeout(() => { if (pxtemp != this.posx || pytemp != this.posy) { document.getElementById(`px${pxtemp}py${pytemp}`).src = "image/casella.png"; this.trov = false } }, 5000);
          }
          setTimeout(() => { this.cooldownaspec2 = false; }, 20000);
          if (this.util2 == 0) {
            document.getElementById("aspec2").innerHTML = "Armamento Esaurito";
          }
          else {
            let tempo = 1 * 20;
            document.getElementById("aspec2").innerHTML = Math.floor(tempo / 60) + ":" + tempo % 60;
            tempo--;
            intervasp = setInterval(() => { if (tempo == 0) { document.getElementById("aspec2").innerHTML = "PRONTO"; clearInterval(intervasp) } else { tempo = updateCountdown("aspec2", tempo, intervasp) } }, 1000);
          }
        }
        else {
          document.getElementById("aspec2").innerHTML = "Armamento in cooldown";
        }
      }
    }

    aSpec3(s) {
      if (this.util3 != 0) {
        if (!this.cooldownaspec3) {
          this.cooldownaspec3 = true;
          let intervasp;
          this.util3--;
          let num1 = 0;
          let num2 = 0;
          if ((s.posx <= this.posx + 6 && s.posx >= this.posx - 6 && s.posy <= this.posy + 3 && s.posy >= this.posy - 3) || (s.posy <= this.posy + 6 && s.posy >= this.posy - 6 && s.posx <= this.posx + 3 && s.posx >= this.posx - 3)) {
            let pxtemp = s.posx;
            let pytemp = s.posy;
            if (n.posx > s.posx) {
              num1 = Math.pow(n.posx - pxtemp, 2);
            }
            else {
              num1 = Math.pow(pxtemp - n.posx, 2);
            }
            if (n.posy > s.posy) {
              num2 = Math.pow(n.posy - pytemp, 2);
            }
            else {
              num2 = Math.pow(pytemp - n.posy, 2);
            }
            document.getElementById("aspec3").innerHTML = "Caselle distanza: " + Math.floor(Math.sqrt(num1 + num2)) + "<div id='aspec3cool'>";
          }
          if (num1 == 0 && num2 == 0) {
            document.getElementById("aspec3").innerHTML = "Uboat non trovato";
          }
          setTimeout(() => { document.getElementById("aspec3").innerHTML = "" }, 5000);
          if (this.util3 == 0) {
            document.getElementById("aspec3").innerHTML = "Armamento Esaurito";
          }
          else {
            setTimeout(() => { this.cooldownaspec3 = false; }, 20000);
            let tempo = 1 * 20;
            document.getElementById("aspec3cool").innerHTML = Math.floor(tempo / 60) + ":" + tempo % 60;
            tempo--;
            intervasp = setInterval(() => { if (tempo == 0) { document.getElementById("aspec3cool").innerHTML = "PRONTO"; clearInterval(intervasp) } else { tempo = updateCountdown("aspec3cool", tempo, intervasp) } }, 1000);
          }
        }
        else {
          document.getElementById("aspec3cool").innerHTML = "<br>Armamento in cooldown";
        }
      }
    }

  }

  class Siluro {
    #mov
    #vit
    #posx
    #posy
    constructor(mov, vit) {
      this.#mov = mov;
      this.vit = vit;
      this.#posx = cas(10, 19);
      this.#posy = cas(10, 19);
    }
    get mov() {
      return this.#mov;
    }
    get vit() {
      return this.#vit;
    }
    set vit(vit) {
      this.#vit = vit;
    }
    get posx() {
      return this.#posx;
    }
    get posy() {
      return this.#posy;
    }
    muovisu() {
      if (this.#posy - this.#mov >= 0) {
        this.#posy = this.#posy - this.#mov;
      }
    }
    muovigiu() {
      if (this.#posy + this.#mov <= 19) {
        this.#posy = this.#posy + this.#mov;
      }
    }
    muovisin() {
      if (this.#posx - this.#mov >= 0) {
        this.#posx = this.#posx - this.#mov;
      }
    }
    muovides() {
      if (this.#posx + this.#mov <= 19) {
        this.#posx = this.#posx + this.#mov;
      }
    }
  }


  class Cannone {
    #git
    #dan
    constructor(git, dan) {
      this.#git = git;
      this.#dan = dan;
    }
    get git() {
      return this.#git;
    }
    get dan() {
      return this.#dan;
    }
  }


  function gioco() {
    window.location.href = "Gioco.htm";
  }
  function regol() {
    window.location.href = "Regole.htm";
  }
  function comands() {
    window.location.href = "Comandi.htm";
  }
  function nave1() {
    gameplay(1);
  }
  function nave2() {
    gameplay(2);
  }
  function nave3() {
    gameplay(3);
  }
  function nave4() {
    gameplay(4);
  }
  function nave5() {
    gameplay(5);
  }
  function gameplay(n) {
    window.location.href = `gameplay.htm?Nave=${n}`;
  }

  let urlParams = new URLSearchParams(window.location.search);
  /**
   * @type {number} Questa variabile rappresenta la scelta dell'utente sulle navi selezionabili
   */
  let nave = urlParams.get("Nave");
  /**
   * @type {Nave} Questa variabile di tipo Nave rappresenta l'utente e verrà assegnata ad uno dei sottotipi di Nave
   */
  let n;
  if (nave == 1) {
    n = new CHMS(3, 3, 5, new Cannone(2, 20), 3);
  }
  if (nave == 2) {
    n = new ILHMS(2, 3, 3, new Cannone(3, 20), 3);
  }
  if (nave == 3) {
    n = new IPHMS(2, 3, 2, new Cannone(4, 25), 2);
  }
  if (nave == 4) {
    n = new CorHMS(2, 3, 4, new Cannone(4, 30), 3);
  }
  if (nave == 5) {
    n = new PHMS(2, 3, 3, new Cannone(0, 0), 999, 3, 3);
  }
  /**
   * Questa funzione crea la tabella di gioco su una base 20*20, inizializza i parametri (armi,timer,sonar) e da il via al gioco
   */
  function inizia() {
    let t = "<table id='table1'>";
    for (let i = 0; i < 20; i++) {
      t += "<tr class='campogioco'>"
      for (let j = 0; j < 20; j++) {
        t += `<td class='campogioco'><img class="casella" src="image/casella.png" id="px${j}py${i}"></td>`;
      }
      t += "</tr>";
    }
    t += "</table>";
    document.getElementById("campo").innerHTML = t;
    if (n instanceof PHMS) {
      document.getElementById("abilita").innerHTML += "<div class='desc'>Armamento Speciale</div>";
      document.getElementById("abilita").innerHTML += "<div class='para'>Aereo Cannoniere Tasto:P</div>";
      document.getElementById("abilita").innerHTML += "<div id='aspec1' class='desc'>PRONTO</div>";
      document.getElementById("abilita").innerHTML += "<div class='para'>Aereo Ricognitore Tasto:O</div>";
      document.getElementById("abilita").innerHTML += "<div id='aspec2' class='desc'>PRONTO</div>";
      document.getElementById("abilita").innerHTML += "<div class='para'>Aereo Sonar Tasto: I</div>";
      document.getElementById("abilita").innerHTML += "<div id='aspec3cool' class='desc'>PRONTO</div><br><div class='desc' id='aspec3'></div>";
      document.getElementById("campo").innerHTML += `<br><div class="tasti" ><img class="botmob" src="image/su.jpg" onclick="movimenton(${1})"><br><img class="botmob" src="image/sinistra.jpg" onclick="movimenton(${2})"><img class='botmob' src='image/giu.jpg' onclick="movimenton(${3})"><img class='botmob' src='image/destra.jpg' onclick="movimenton(${4})"></div><div class='tastiarm'><img class='botmob' src='image/destra.jpg' onclick="movimenton(${7})"><img class='botmob' src='image/destra.jpg' onclick="movimenton(${8})"><img class='botmob' src='image/destra.jpg' onclick="movimenton(${9})"></div>`;
    }
    else {
      document.getElementById("abilita").innerHTML += "<div class='para'>Cannone</div>";
      document.getElementById("abilita").innerHTML += "<div id='cann' class='desc'>PRONTO</div>";
      document.getElementById("abilita").innerHTML += "<div class='para'>Armamento Speciale</div>";
      document.getElementById("abilita").innerHTML += "<div id='aspec' class='desc'>PRONTO</div>";
      document.getElementById("campo").innerHTML += `<br><div class='tasti'><img src='image/su.jpg' onclick="movimenton(${1})" class='botmob'><br><img src='image/sinistra.jpg' onclick="movimenton(${2})" class='botmob'><img src='image/giu.jpg' onclick="movimenton(${3})" class='botmob'><img src='image/destra.jpg' onclick="movimenton(${4})" class='botmob'></div><div class='tastiarm'><img src='image/destra.jpg' onclick="movimenton(${5})" class='botmob'><img src='image/destra.jpg' onclick="movimenton(${6})" class='botmob'></div>`
    }
    controlloGiocatore();
  }
  /**
   * @type {Siluro} Questa oggeto di tipo Siluro rappresenta l'Uboat e le sue funzioni di movimento
   */
  let s = new Siluro(3, 100);
  /**
   * @type {boolean} Questa variabile conrolla lo stato della visibilità dell'Uboat
   */
  let statos = false;
  /**
   * @type {boolean} Questa variabile controlla se la posizione dell'Uboat coincide con quella della nave
   */
  let scoincn = false;
  /**
   * @type {boolean} Questa funzione controlla se la posizione della nave coincide con quella dell'Uboat
   */
  let ncoincs = false;
  /**
   * Questa funzione imposta l'inizio del gioco. Imposta la posizione della nave a 0 0 (A1), avvia il sonar e fa partire l'Uboat.
   */
  function controlloGiocatore() {
    document.getElementById("px0py0").src = "image/casellav.png";
    avviaSonar();
    interv = setInterval(function () { movimentos(); avviaSonar() }, 1000);
    cambiastato();
    window.addEventListener("keydown", function (event) { movimenton(event); avviaSonar() });
  }
  /**
   * Questa funzione serve ad avviare il sonar che controlla se l'Uboat si trova nelle vicinanze, nel caso affermativo, comunica la distanza dal nemico all'utente
   */
  function avviaSonar() {
    let num1;
    let num2;

    if (n.son + n.posx >= s.posx && n.posx - n.son <= s.posx && n.son + n.posy >= s.posy && n.posy - n.son <= s.posy) {
      if (n.posx > s.posx) {
        num1 = Math.pow(n.posx - s.posx, 2);
      }
      else {
        num1 = Math.pow(s.posx - n.posx, 2);
      }
      if (n.posy > s.posy) {
        num2 = Math.pow(n.posy - s.posy, 2);
      }
      else {
        num2 = Math.pow(s.posy - n.posy, 2);
      }
      document.getElementById("sonar").innerHTML = "Caselle distanza: " + Math.floor(Math.sqrt(num1 + num2));
    }
    else {
      document.getElementById("sonar").innerHTML = "Non in range";
    }
  }
  /**
   * Questa funzione genera un numero casuale da un minimo ad un massimo presi come parametro.
   * @param {number} da Numero che rappresenta il minimo numero da generare
   * @param {number} a Numero che rappresenta il massimo numero da generare
   * @returns 
   */
  function cas(da, a) {
    return Math.floor(Math.random() * (a - da + 1)) + da;
  }
  /**
   * Questa funzione ricorsiva imposta lo stato dell'Uboat da visibile a non visibile e viceversa.
   */
  function cambiastato() {
    setTimeout(function () { statos = true; setTimeout(function () { statos = false; document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casella.png"; cambiastato(); }, 20000) }, 30000);
  }
  /**
   * Questa funzione di occupa del movimento dell'Uboat; Genera un numero casuale tra 1 e 4 e a seconda del risultato sposta l'Uboat in una direzione; Inoltre controlla che l'Uboat non sia sovrapposto con la nave. La funzione controlla anche se l'uboat si trova nel raggio di una delle bomba piazzate dalla seconda nave.
   */
  function movimentos() {
    let movscelta = cas(1, 4);
    let pyatt;
    let pxatt;
    switch (movscelta) {
      case 1:
        pxatt = s.posx;
        pyatt = s.posy;
        s.muovides();
        if (statos) {
          if (s.posx <= n.posx + n.vis && s.posx >= n.posx - n.vis && s.posy < n.posy + n.vis && s.posy > n.posy - n.vis) {
            if (s.posx == n.posx && s.posy == n.posy) {
              document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casellav.png";
              if (!s.trov) {
                if (pxatt == n.posx) {
                  document.getElementById(`px${pxatt}py${pyatt}`).src = "image/casellav.png";
                }
                else {
                  if (pxatt != s.posx) {
                    document.getElementById(`px${pxatt}py${s.posy}`).src = "image/casella.png";
                  }
                }
              }
              scoincn = true;
            }
            else {
              document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casellar.png";
              if ((!scoincn && !ncoincs)) {
                if (pxatt != s.posx) {
                  document.getElementById(`px${pxatt}py${s.posy}`).src = "image/casella.png";
                }
              }
              else {
                scoincn = false;
              }
            }
          }
          else {
            document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casella.png";
            document.getElementById(`px${pxatt}py${pyatt}`).src = "image/casella.png";
          }
        }
        if (n instanceof ILHMS) {
          if (n.b1 != null) {
            if (s.posx + 2 >= n.b1.posx && s.posx - 2 <= n.b1.posx && s.posy + 2 >= n.b1.posy && s.posy - 2 <= n.b1.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src = "image/casella.png";
              n.b1 = null;
            }
          }
          if (n.b2 != null) {
            if (s.posx + 2 >= n.b2.posx && s.posx - 2 <= n.b2.posx && s.posy + 2 >= n.b2.posy && s.posy - 2 <= n.b2.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src = "image/casella.png";
              n.b2 = null;
            }
          }
          if (n.b3 != null) {
            if (s.posx + 2 >= n.b3.posx && s.posx - 2 <= n.b3.posx && s.posy + 2 >= n.b3.posy && s.posy - 2 <= n.b3.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src = "image/casella.png";
              n.b3 = null;
            }
          }
        }
        break;
      case 2:
        pxatt = s.posx;
        pyatt = s.posy;
        s.muovisin();
        if (statos) {
          if (s.posx <= n.posx + n.vis && s.posx >= n.posx - n.vis && s.posy < n.posy + n.vis && s.posy > n.posy - n.vis) {
            if (s.posx == n.posx && s.posy == n.posy) {
              document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casellav.png";
              if (!s.trov) {
                if (pxatt == n.posx) {
                  document.getElementById(`px${pxatt}py${pyatt}`).src = "image/casellav.png";
                }
                else {
                  if (pxatt != s.posx) {
                    document.getElementById(`px${pxatt}py${s.posy}`).src = "image/casella.png";
                  }
                }
              }
              scoincn = true;
            }
            else {
              document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casellar.png";
              if ((!scoincn && !ncoincs)) {
                if (pxatt != s.posx) {
                  document.getElementById(`px${pxatt}py${s.posy}`).src = "image/casella.png";
                }
              }
              else {
                scoincn = false;
              }
            }
          }
          else {
            document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casella.png";
            document.getElementById(`px${pxatt}py${pyatt}`).src = "image/casella.png";
          }
        }
        if (n instanceof ILHMS) {
          if (n.b1 != null) {
            if (s.posx + 2 >= n.b1.posx && s.posx - 2 <= n.b1.posx && s.posy + 2 >= n.b1.posy && s.posy - 2 <= n.b1.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src = "image/casella.png";
              n.b1 = null;
            }
          }
          if (n.b2 != null) {
            if (s.posx + 2 >= n.b2.posx && s.posx - 2 <= n.b2.posx && s.posy + 2 >= n.b2.posy && s.posy - 2 <= n.b2.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src = "image/casella.png";
              n.b2 = null;
            }
          }
          if (n.b3 != null) {
            if (s.posx + 2 >= n.b3.posx && s.posx - 2 <= n.b3.posx && s.posy + 2 >= n.b3.posy && s.posy - 2 <= n.b3.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src = "image/casella.png";
              n.b3 = null;
            }
          }
        }
        break;
      case 3:
        pxatt = s.posx;
        pyatt = s.posy;
        s.muovisu();
        if (statos) {
          if (s.posx < n.posx + n.vis && s.posx > n.posx - n.vis && s.posy < n.posy + n.vis && s.posy > n.posy - n.vis) {
            if (s.posx == n.posx && s.posy == n.posy) {
              document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casellav.png";
              if (!s.trov) {
                if (pyatt == n.posy) {
                  document.getElementById(`px${pxatt}py${pyatt}`).src = "image/casellav.png";
                }
                else {
                  if (pyatt != s.posy) {
                    document.getElementById(`px${pxatt}py${pyatt}`).src = "image/casella.png";
                  }
                }
              }
              scoincn = true;
            }
            else {
              document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casellar.png";
              if ((!scoincn && !ncoincs)) {
                if (s.posy != pyatt) {
                  document.getElementById(`px${s.posx}py${pyatt}`).src = "image/casella.png";
                }
              }
              else {
                scoincn = false;
              }
            }
          }
          else {
            document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casella.png";
            document.getElementById(`px${pxatt}py${pyatt}`).src = "image/casella.png";
          }
        }
        if (n instanceof ILHMS) {
          if (n.b1 != null) {
            if (s.posx + 2 >= n.b1.posx && s.posx - 2 <= n.b1.posx && s.posy + 2 >= n.b1.posy && s.posy - 2 <= n.b1.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src = "image/casella.png";
              n.b1 = null;
            }
          }
          if (n.b2 != null) {
            if (s.posx + 2 >= n.b2.posx && s.posx - 2 <= n.b2.posx && s.posy + 2 >= n.b2.posy && s.posy - 2 <= n.b2.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src = "image/casella.png";
              n.b2 = null;
            }
          }
          if (n.b3 != null) {
            if (s.posx + 2 >= n.b3.posx && s.posx - 2 <= n.b3.posx && s.posy + 2 >= n.b3.posy && s.posy - 2 <= n.b3.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src = "image/casella.png";
              n.b3 = null;
            }
          }
        }
        break;
      case 4:
        pxatt = s.posx;
        pyatt = s.posy;
        s.muovigiu();
        if (statos) {
          if (s.posx < n.posx + n.vis && s.posx > n.posx - n.vis && s.posy < n.posy + n.vis && s.posy > n.posy - n.vis) {
            if (s.posx == n.posx && s.posy == n.posy) {
              document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casellav.png";
              if (!s.trov) {
                if (pyatt == n.posy) {
                  document.getElementById(`px${pxatt}py${pyatt}`).src = "image/casellav.png";
                }
                else {
                  if (pyatt != s.posy) {
                    document.getElementById(`px${pxatt}py${pyatt}`).src = "image/casella.png";
                  }
                }
              }
              scoincn = true;
            }
            else {
              document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casellar.png";
              if ((!scoincn && !ncoincs)) {
                if (s.posy != pyatt) {
                  document.getElementById(`px${s.posx}py${pyatt}`).src = "image/casella.png";
                }
              }
              else {
                scoincn = false;
              }
            }
          }
          else {
            document.getElementById(`px${s.posx}py${s.posy}`).src = "image/casella.png";
            document.getElementById(`px${pxatt}py${pyatt}`).src = "image/casella.png";
          }
        }
        if (n instanceof ILHMS) {
          if (n.b1 != null) {
            if (s.posx + 2 >= n.b1.posx && s.posx - 2 <= n.b1.posx && s.posy + 2 >= n.b1.posy && s.posy - 2 <= n.b1.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src = "image/casella.png";
              n.b1 = null;
            }
          }
          if (n.b2 != null) {
            if (s.posx + 2 >= n.b2.posx && s.posx - 2 <= n.b2.posx && s.posy + 2 >= n.b2.posy && s.posy - 2 <= n.b2.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src = "image/casella.png";
              n.b2 = null;
            }
          }
          if (n.b3 != null) {
            if (s.posx + 2 >= n.b3.posx && s.posx - 2 <= n.b3.posx && s.posy + 2 >= n.b3.posy && s.posy - 2 <= n.b3.posy) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              }
              else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src = "image/casella.png";
              n.b3 = null;
            }
          }
        }
        break;
    }
  }
  let possmov = true;
  /**
   * Questa funzione si occupa di tutte le funzionalità della nave; In base al numero ricevuto, la nave si muoverà nelle 4 direzioni, sparerà o utilizzerà l'armamento speciale; Inoltre controlla che le posizioni della nave e dell'Uboat non siano sovrapposte e nel caso lo siano, sostituisce l'immagine con quella della nave.
   * @param {number} lett Variabile che rappresenta il comando che deve eseguire la nave
   */
  function movimenton(lett) {
    if (possmov) {
      possmov = false;
      setTimeout(() => { possmov = true }, 150);
      let posatt;
      switch (lett) {
        case 4:
          posatt = n.posx;
          n.muovides();
          if (n.posx == s.posx && n.posy == s.posy) {
            document.getElementById(`px${n.posx}py${n.posy}`).src = "image/casellav.png";
            if (posatt != n.posx) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(`px${n.posx - (n.posx - posatt)}py${n.posy}`).src = "image/mina.png";
              }
              else {
                document.getElementById(`px${n.posx - (n.posx - posatt)}py${n.posy}`).src = "image/casella.png";
              }
            }
            ncoincs = true;
          }
          else {
            document.getElementById(`px${n.posx}py${n.posy}`).src = "image/casellav.png";
            if (posatt != n.posx) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(`px${n.posx - (n.posx - posatt)}py${n.posy}`).src = "image/mina.png";
              }
              else {
                document.getElementById(`px${n.posx - (n.posx - posatt)}py${n.posy}`).src = "image/casella.png";
              }
            }
            ncoincs = false;
          }
          break;
        case 2:
          posatt = n.posx;
          n.muovisin();
          if (n.posx == s.posx && n.posy == s.posy) {
            document.getElementById(`px${n.posx}py${n.posy}`).src = "image/casellav.png";
            if (posatt != n.posx) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(`px${n.posx + (posatt - n.posx)}py${n.posy}`).src = "image/mina.png";
              }
              else {
                document.getElementById(`px${n.posx + (posatt - n.posx)}py${n.posy}`).src = "image/casella.png";
              }
            }
            ncoincs = true;
          }
          else {
            document.getElementById(`px${n.posx}py${n.posy}`).src = "image/casellav.png";
            if (posatt != n.posx) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(`px${n.posx + (posatt - n.posx)}py${n.posy}`).src = "image/mina.png";
              }
              else {
                document.getElementById(`px${n.posx + (posatt - n.posx)}py${n.posy}`).src = "image/casella.png";
              }
            }
            ncoincs = false;
          }
          break;
        case 1:
          posatt = n.posy;
          n.muovisu();
          if (n.posx == s.posx && n.posy == s.posy) {
            document.getElementById(`px${n.posx}py${n.posy}`).src = "image/casellav.png";
            if (posatt != n.posy) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(`px${n.posx}py${n.posy + (posatt - n.posy)}`).src = "image/mina.png";
              }
              else {
                document.getElementById(`px${n.posx}py${n.posy + (posatt - n.posy)}`).src = "image/casella.png";
              }
            }
            ncoincs = true;
          }
          else {
            document.getElementById(`px${n.posx}py${n.posy}`).src = "image/casellav.png";
            if (posatt != n.posy) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(`px${n.posx}py${n.posy + (posatt - n.posy)}`).src = "image/mina.png";
              }
              else {
                document.getElementById(`px${n.posx}py${n.posy + (posatt - n.posy)}`).src = "image/casella.png";
              }
            }
            ncoincs = false;
          }
          break;
        case 3:
          console.log();
          posatt = n.posy;
          n.muovigiu();
          if (n.posx == s.posx && n.posy == s.posy) {
            document.getElementById(`px${n.posx}py${n.posy}`).src = "image/casellav.png";
            if (posatt != n.posy) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(`px${n.posx}py${n.posy - (n.posy - posatt)}`).src = "image/mina.png";
              }
              else {
                document.getElementById(`px${n.posx}py${n.posy - (n.posy - posatt)}`).src = "image/casella.png";
              }
            }
            ncoincs = true;
          }
          else {
            document.getElementById(`px${n.posx}py${n.posy}`).src = "image/casellav.png";
            if (posatt != n.posy) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(`px${n.posx}py${n.posy - (n.posy - posatt)}`).src = "image/mina.png";
              }
              else {
                document.getElementById(`px${n.posx}py${n.posy - (n.posy - posatt)}`).src = "image/casella.png";
              }
            }
            ncoincs = false;
          }
          break;
        case 5:
          if (!(n instanceof PHMS)) {
            let intervcan;
            if (!n.cooldowncan) {
              let audio=new Audio("sounds/sparo.mp3");
              audio.play();
              n.cooldowncan = true;
              if ((n.can.git + n.posx >= s.posx && n.posx - n.can.git <= s.posx) && (n.posy + n.can.git >= s.posy && n.posy - n.can.git <= s.posy)) {
                s.vit = s.vit - n.can.dan;
                if (s.vit <= 0) {
                  fine(true);
                }
                else {
                  updateHealthBar(document.querySelector(".health"), s.vit);
                }
              }
              setTimeout(() => { n.cooldowncan = false; }, 10000);
              let tempo = 1 * 10;
              document.getElementById("cann").innerHTML = Math.floor(tempo / 60) + ":" + tempo % 60;
              tempo--;
              intervcan = setInterval(() => { if (tempo == 0) { document.getElementById("cann").innerHTML = "PRONTO"; clearInterval(intervcan) } else { tempo = updateCountdown("cann", tempo, intervcan) } }, 1000);
            }
            else {
              document.getElementById("cann").innerHTML = "Cannone in cooldown";
            }
          }
          break;
        case 6:
          if (!(n instanceof PHMS)) {
            n.aSpec(s);
          }
          break;
        case 7:
          if (n instanceof PHMS) {
            n.aSpec1(s);
          }
          break;
        case 8:
          if (n instanceof PHMS) {
            n.aSpec2(s);
          }
          break;
        case 9:
          if (n instanceof PHMS) {
            n.aSpec3(s);
          }
          break;
      }
    }
  }
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if (page == "gameplay.htm") {
    document.addEventListener("DOMContentLoaded", inizia);
    document.addEventListener("DOMContentLoaded", avviaCountdown);
    document.addEventListener("DOMContentLoaded", function () { updateHealthBar(document.querySelector(".health"), s.vit); })
  }

  if (page != "gameplay.htm" && page != "index.htm" && page != "fine.htm") {
    document.addEventListener("keyup", (e) => { if (e.key == "Escape") { history.back() } });
  }

  if (page == "fine.htm") {
    document.addEventListener("DOMContentLoaded", rigioca);
  }
  /**
   * Questa funziona mostra all'utente, attraverso del codice HTML, una schermata di vittoria o di sconfitta, a seconda dell'esito della partita
   */
  function rigioca() {
    let urlParams2 = new URLSearchParams(window.location.search);
    let esit = urlParams2.get("esit");
    if (esit == "true") {
      document.getElementById("fine").innerHTML += "<div class='titolo'>HAI VINTO</div><br><div class='schermata_f'>Congratulazioni!</div> <div class='coppa'><img src='image/coppa.png'></div> <input type='button' class='bott2' value='Rigioca' onclick='restart()'>";
    }
    else {
      document.getElementById("fine").innerHTML += "<div class='titolo'>HAI PERSO</div><br><div class='schermata_f'>Peccato!</div><div class='coppa'><img width='90%' height='400px' src='image/sconfitta.jpg'></div><input type='button' class='bott2' value='Rigioca' onclick='restart()'>";
    }
  }
  /**
   * Questa funziona serve a reindirizzare l'utente alla pagina principale dopo aver terminato il gioco
   */
  function restart() {
    window.location.href = "index.htm";
  }
  /**
   * Questa funzione viene eseguita ogni volta che l'Uboat viene colpito e aggiorna la vita dell'elemento healthbar, sostituendo quella precedente con la variabile value
   * @param {Element} healthBar Variabile che indica l'elemento della barra della vita
   * @param {number} value Variabile che rappresenta i nuovi punti vita
   */
  function updateHealthBar(healthBar, value) {
    value = Math.round(value);
    healthBar.querySelector(".health__fill").style.width = `${value}%`;
    healthBar.querySelector(".health__text").textContent = `${value} HP`;
  }

  let refreshIntervalId;
  /**
   * Questa funzione avvia il countdown del gioco al caricamento della pagina gameplay.htm e invoca una funzione che aggiorna il timer
   */
  function avviaCountdown() {
    let tempo = 5 * 60;
    document.getElementById("countdown").innerHTML = Math.floor(tempo / 60) + ":" + tempo % 60 + "0";
    tempo--;
    refreshIntervalId = setInterval(() => { tempo = updateCountdown("countdown", tempo, refreshIntervalId) }, 1000);
  }
  /**
   * Questa funzione aggiorna qualsiasi countdown in tutto il programma, anche i cooldown delle armi, diminuendo una variabile che indica il tempo rimanente.
   * @param {number} id Variabile che contiene l'id del chiamante
   * @param {number} temp Variabile che indica se il countdown principale è terminato
   * @param {number} int Variabile che interrompe l'intervallo del chiamante
   * @returns 
   */
  function updateCountdown(id,temp, int) {
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
  /**
   * Funzione che controlla se il giocatore ha terminato il tempo ho ha ridotto gli HP dell'uboat a 0. Questa funzione invia l'utente ad una pagina dedicata all'esito della partita.
   * @param {boolean} esito variabile che indica l'esito della partita
   */
  function fine(esito) {
    if (esito) {
      window.location.href = `fine.htm?esit=${esito}`;
    }
    else {
      window.location.href = `fine.htm?esit=${esito}`;
    }
  }

  function test1() {
    let nave = new ILHMS(41, 10, 10, 3, 3);
    let nave1 = new CHMS(41, 29, 30, 4, 6);
    let nave2 = new CorHMS(41, 20, 3, 30);
    let nave3 = new PHMS(41, 20, 2, 2, 2, 2, 22);
    let nave4 = new IPHMS(41, 20, 30, 40, 5);
    for (let i = 0; i < 10; i++) {
      nave.muovides();
      nave1.muovides();
      nave2.muovides();
      nave3.muovides();
      nave4.muovides();
    }
    if (nave1 >= 39 && nave1 <= 0 && nave >= 39 && nave <= 0 && nave2 >= 39 && nave2 <= 0 && nave3 >= 39 && nave3 <= 0 && nave4 >= 39 && nave4 < 0) {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
      console.log("no")
    } else {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
    }

    for (let i = 0; i < 10; i++) {
      nave.muovigiu();
      nave1.muovigiu();
      nave2.muovigiu();
      nave3.muovigiu();
      nave4.muovigiu();
    }
    if (nave1 >= 39 && nave1 <= 0 && nave >= 39 && nave <= 0 && nave2 >= 39 && nave2 <= 0 && nave3 >= 39 && nave3 <= 0 && nave4 >= 39 && nave4 < 0) {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
      console.log("no")
    } else {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
    }

    for (let i = 0; i < 10; i++) {
      nave.muovisin();
      nave1.muovisin();
      nave2.muovisin();
      nave3.muovisin();
      nave4.muovisin();
    }
    if (nave1 >= 39 && nave1 <= 0 && nave >= 39 && nave <= 0 && nave2 >= 39 && nave2 <= 0 && nave3 >= 39 && nave3 <= 0 && nave4 >= 39 && nave4 < 0) {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
      console.log("no")
    } else {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
    }

    for (let i = 0; i < 10; i++) {
      nave.muovisu();
      nave1.muovisu();
      nave2.muovisu();
      nave3.muovisu();
      nave4.muovisu();

    }

    if (nave1 >= 39 && nave1 <= 0 && nave >= 39 && nave <= 0 && nave2 >= 39 && nave2 <= 0 && nave3 >= 39 && nave3 <= 0 && nave4 >= 39 && nave4 < 0) {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
      console.log("no")
    } else {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
    }
  }
  /**
   * Questa funzione serve a ricaricare la pagina index
   */
  function indietro() {
    window.location.href = "index.htm";
  }

}
