/*
variabili da mandare al server
*/
var naveServer;
var tempoServer;
/**
 * @author Mirco bardhi-Stefano Minniti-Marco Zandona'
 * @version 2.0
 */

/**
 * Classe che rappresenta la nave
 * @class
 */
if (screen.width > 768) {
  class Nave {
    #mov;
    #vis;
    #son;
    #can;
    #posx;
    #posy;
    #util;
    #cooldowncan;
    #cooldownaspec;
    /**
     * Crea un oggetto di tipo nave
     * @constructor
     * @param {number} mov movimento massimo della nave
     * @param {number} vis visibilita massima della nave
     * @param {number} son raggio del sonar
     * @param {Cannone} can oggetto cannone
     * @param {number} util utilizzi speciali della nave
     * @var {number} posx posizione nell'asse x della nave
     * @var {number} posy posizione nell'asse y della nave
     * @var {boolean} cooldowncan stato del cannone
     * @var {boolean} cooldownaspec stato dell arma speciale
     */
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
    /**
     * Restituisce il tempo di ricarica del cannone
     * @return {boolean} tempo di ricarica
     */
    get cooldowncan() {
      return this.#cooldowncan;
    }
    /**
     * Imposta il tempo di ricarica del cannone
     * @param {boolean} cooldowncan tempo di ricarica
     */
    set cooldowncan(cooldowncan) {
      this.#cooldowncan = cooldowncan;
    }
    /**
     * Restituisce il tempo di ricarica dell' arma speciale
     * @return {boolean} tempo di ricarica
     */
    get cooldownaspec() {
      return this.#cooldownaspec;
    }
    /**
     * Imposta il tempo di ricarica dell' arma speciale
     * @param {boolean} cooldownaspec tempo di ricarica
     */
    set cooldownaspec(cooldownaspec) {
      this.#cooldownaspec = cooldownaspec;
    }
    /**
     * Imposta il numero di utilizzi dell' arma speciale
     * @param {number} util numero di utilizzi
     */
    set util(util) {
      this.#util = util;
    }
    /**
     * Imposta il numero di caselle di movimento massimo della nave
     * @param {number} mov caselle
     */
    set mov(mov) {
      this.#mov = mov;
    }
    /**
     * Imposta il numero di utilizzi dell' arma speciale
     * @return {number} numero di utilizzi
     */
    get util() {
      return this.#util;
    }
    /**
     * Restituisce il numero di caselle di movimento massimo della nave
     * @return {boolean} caselle di movimento
     */
    get mov() {
      return this.#mov;
    }
    /**
     * Restituisce la visibilità massima della nave
     * @return {number} visibilità
     */
    get vis() {
      return this.#vis;
    }
    /**
     * Restituisce l'oggetto sonar
     * @return {number} sonar
     */
    get son() {
      return this.#son;
    }
    /**
     * Restituisce l'oggetto cannone
     * @return {Cannone} cannone
     */
    get can() {
      return this.#can;
    }
    /**
     * Restituisce la posizione della nave sull' asse x
     * @return {number} restituisce la posizione sulle righe
     */
    get posx() {
      return this.#posx;
    }
    /**
     * Restituisce la posizione della nave sull' asse y
     * @return {number} restituisce la posizione sulle colonne
     */
    get posy() {
      return this.#posy;
    }
    /**
     * Muove la nave verso l'alto cambiando la variabile posy, se la nave esce dai bordi, imposta la posizione al massimo
     */
    muovisu() {
      if (this.#posy - this.#mov >= 0) {
        this.#posy = this.#posy - this.#mov;
      } else {
        this.#posy = 0;
      }
    }
    /**
     * Muove la nave verso il basso cambiando la variabile posy, se la nave esce dai bordi, imposta la posizione al massimo
     */
    muovigiu() {
      if (this.#posy + this.#mov < 39) {
        this.#posy = this.#posy + this.#mov;
      } else {
        this.#posy = 39;
      }
    }
    /**
     * Muove la nave verso sinistra cambiando la variabile posx, se la nave esce dai bordi, imposta la posizione al massimo
     */
    muovisin() {
      if (this.#posx - this.#mov >= 0) {
        this.#posx = this.#posx - this.#mov;
      } else {
        this.#posx = 0;
      }
    }
    /**
     * Muove la nave verso destra cambiando la variabile posx, se la nave esce dai bordi, imposta la posizione al massimo
     */
    muovides() {
      if (this.#posx + this.#mov < 39) {
        this.#posx = this.#posx + this.#mov;
      } else {
        this.#posx = 39;
      }
    }
  }

  /**
   * Rapresenta un tipo specifico di nave (CHMS)
   * @class
   * @extends Nave
   */
  class CHMS extends Nave {
    /**
     * Crea una nave CHMS
     * @constructor richiama il costruttore di Nave
     */
    constructor(mov, vis, son, can, util) {
      super(mov, vis, son, can, util);
    }

    /**
     * Arma speciale della nave CHMS, controlla se l' U-boat è nel range dell armamento; se gli utilizzi sono maggiori di 0 danneggia l'U-boat
     * @param {Siluro} s Oggetto di tipo Siluro rappresentante l'Uboat
     */
    aSpec(s) {
      if (this.util != 0) {
        if (!this.cooldownaspec) {
          let audio = new Audio("sounds/armspar.mp3");
          audio.play();
          this.cooldownaspec = true;
          let intervasp;
          this.util--;
          if (
            this.posx + 1 >= s.posx &&
            this.posx - 1 <= s.posx &&
            this.posy + 1 >= s.posy &&
            this.posy - 1 <= s.posy
          ) {
            console.log(this.util);
            s.vit = s.vit - 40;
            if (s.vit <= 0) {
              fine(true);
            } else {
              updateHealthBar(document.querySelector(".health"), s.vit);
            }
          }
          if (this.util == 0) {
            document.getElementById("aspec").innerHTML = "Armamento Esaurito";
          } else {
            setTimeout(() => {
              this.cooldownaspec = false;
            }, 20000);
            let tempo = 1 * 20;
            document.getElementById("aspec").innerHTML =
              Math.floor(tempo / 60) + ":" + (tempo % 60);
            tempo--;
            intervasp = setInterval(() => {
              if (tempo == 0) {
                document.getElementById("aspec").innerHTML = "PRONTO";
                clearInterval(intervasp);
              } else {
                tempo = updateCountdown("aspec", tempo, intervasp);
              }
            }, 1000);
          }
        } else {
          document.getElementById("aspec").innerHTML = "Armamento in cooldown";
        }
      }
    }
  }

  /**
   * Oggetto che rappresenta la bomba della nave ILHMS
   * @class
   */
  class Bomba {
    #posx;
    #posy;
    /**
     * Crea una bomba con parametri:
     * @constructor
     * @param {number} posx posizione della bomba nell'asse x
     * @param {number} posy posizione della bomba nell'asse y
     */
    constructor(posx, posy) {
      this.posx = posx;
      this.posy = posy;
    }
    /**
     * Restituisce la coordinata x della bomba
     * @returns {number} restituisce la posizione sulle righe
     */
    get posx() {
      return this.#posx;
    }
    /**
     * Imposta la coordinata x della bomba
     * @param {number} posx posizione sulle righe
     */
    set posx(posx) {
      this.#posx = posx;
    }
    /**
     * Restituisce la coordinata y della bomba
     * @returns {number} restituisce la posizione sulle colonne
     */
    get posy() {
      return this.#posy;
    }
    /**
     * Imposta la coordinata y della bomba
     * @param {number} posy posizione sulle colonne
     */
    set posy(posy) {
      this.#posy = posy;
    }
  }

  /**
   * Rapresenta un tipo specifio di nave (ILHMS)
   * @class
   * @extends Nave
   */
  class ILHMS extends Nave {
    #b1;
    #b2;
    #b3;
    #utilmin;
    /**
     * Crea una nave ILHMS con i seguenti parametri:
     * @constructor richiama il costruttore di Nave
     * @param {Bomba} b1 prima bomba
     * @param {Bomba} b2 seconda bomba
     * @param {Bomba} b3 terza bomba
     * @var {boolean} utilmin indica se una bomba è stata piazzata
     */
    constructor(mov, vis, son, can, util) {
      super(mov, vis, son, can, util);
      this.#b1 = null;
      this.#b2 = null;
      this.#b3 = null;
      this.utilmin = false;
    }
    /**
     * Restituisce lo stato delle bombe
     * @return {boolean} stato bombe
     */
    get utilmin() {
      return this.#utilmin;
    }
    /**
     * Imposta lo stato delle bombe
     * @param {boolean} utilimin stato bombe
     */
    set utilmin(utilmin) {
      this.#utilmin = utilmin;
    }
    /**
     * Restituisce la prima bomba
     * @return {Bomba} prima bomba
     */
    get b1() {
      return this.#b1;
    }
    /**
     * Restituisce la seconda bomba
     * @return {Bomba} seconda bomba
     */
    get b2() {
      return this.#b2;
    }
    /**
     * Restituisce la terza bomba
     * @return {Bomba} terza bomba
     */
    get b3() {
      return this.#b3;
    }
    /**
     * Imposta la prima bomba
     * @param {Bomba} b1 prima bomba
     */
    set b1(b1) {
      this.#b1 = b1;
    }
    /**
     * Imposta la seconda bomba
     * @param {Bomba} b2 seconda bomba
     */
    set b2(b2) {
      this.#b2 = b2;
    }
    /**
     * Imposta la terza bomba
     * @param {Bomba} b3 terza bomba
     */
    set b3(b3) {
      this.#b3 = b3;
    }

    /**
     * Arma speciale della nave ILHMS, controlla se l'U-boat è nel range dell'armamento se gli utilizzi sono maggiori di 0 danneggia l' U-boat. Se non viene rilevato piazza una mina nella stessa posizione della nave
     * @param {Siluro} s oggetto Siluro
     */
    aSpec(s) {
      if (this.util != 0) {
        if (!this.cooldownaspec) {
          let audio = new Audio("sounds/bomba.mp3");
          audio.play();
          this.cooldownaspec = true;
          let intervasp;
          this.util--;
          if (
            this.posx + 2 >= s.posx &&
            this.posx - 2 <= s.posx &&
            this.posy + 2 >= s.posy &&
            this.posy - 2 <= s.posy
          ) {
            s.vit = s.vit - 35;
            if (s.vit <= 0) {
              fine(true);
            } else {
              updateHealthBar(document.querySelector(".health"), s.vit);
            }
          } else {
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
          } else {
            setTimeout(() => {
              this.cooldownaspec = false;
            }, 20000);
            let tempo = 1 * 20;
            document.getElementById("aspec").innerHTML =
              Math.floor(tempo / 60) + ":" + (tempo % 60);
            tempo--;
            intervasp = setInterval(() => {
              if (tempo == 0) {
                document.getElementById("aspec").innerHTML = "PRONTO";
                clearInterval(intervasp);
              } else {
                tempo = updateCountdown("aspec", tempo, intervasp);
              }
            }, 1000);
          }
        } else {
          document.getElementById("aspec").innerHTML = "Armamento in cooldown";
        }
      }
    }
  }

  /**
   * Rapresenta un tipo specifio di nave (CorHMS)
   * @class
   * @extends Nave
   */
  class CorHMS extends Nave {
    /**
     * Crea una nave CorHMS
     * @constructor richiama il costruttore di Nave
     */
    constructor(mov, vis, son, can, util) {
      super(mov, vis, son, can, util);
    }

    /**
     * Arma speciale della nave CorHMS che aumenta la variabile di movimento (mov) di 2
     */
    aSpec() {
      if (this.util != 0) {
        if (!this.cooldownaspec) {
          let audio = new Audio("sounds/spboost.mp3");
          audio.play();
          this.cooldownaspec = true;
          let intervasp;
          this.util--;
          console.log(this.mov);
          this.mov = 5;
          setTimeout(() => {
            this.mov = 3;
          }, 7000);
          if (this.util == 0) {
            document.getElementById("aspec").innerHTML = "Armamento Esaurito";
          } else {
            setTimeout(() => {
              this.cooldownaspec = false;
            }, 20000);
            let tempo = 1 * 20;
            document.getElementById("aspec").innerHTML =
              Math.floor(tempo / 60) + ":" + (tempo % 60);
            tempo--;
            intervasp = setInterval(() => {
              if (tempo == 0) {
                document.getElementById("aspec").innerHTML = "PRONTO";
                clearInterval(intervasp);
              } else {
                tempo = updateCountdown("aspec", tempo, intervasp);
              }
            }, 1000);
          }
        } else {
          document.getElementById("aspec").innerHTML = "Armamento in cooldown";
        }
      }
    }
  }
  /**
   * Rapresenta un tipo specifio di nave (IPHMS)
   * @class
   * @extends Nave
   */
  class IPHMS extends Nave {
    /**
     * Crea una nave IPHMS
     * @constructor richiama il costruttore di Nave
     */
    constructor(mov, vis, son, can, util) {
      super(mov, vis, son, can, util);
    }
    /**
     * Arma speciale della nave IPHMS controlla se l' U-boat è nel range dell armamento se gli utilizzi sono maggiori di 0 lo danneggia
     * @param {Siluro} s oggetto Siluro
     */
    aSpec(s) {
      if (this.util != 0) {
        if (!this.cooldownaspec) {
          let audio = new Audio("sounds/armspar.mp3");
          audio.play();
          this.cooldownaspec = true;
          let intervasp;
          this.util--;
          if (
            this.posx + 7 >= s.posx &&
            this.posx - 7 <= s.posx &&
            this.posy + 7 >= s.posy &&
            this.posy - 7 <= s.posy
          ) {
            s.vit = s.vit - 30;
            if (s.vit <= 0) {
              fine(true);
            } else {
              updateHealthBar(document.querySelector(".health"), s.vit);
            }
          }
          if (this.util == 0) {
            document.getElementById("aspec").innerHTML = "Armamento Esaurito";
          } else {
            setTimeout(() => {
              this.cooldownaspec = false;
            }, 20000);
            let tempo = 1 * 20;
            document.getElementById("aspec").innerHTML =
              Math.floor(tempo / 60) + ":" + (tempo % 60);
            tempo--;
            intervasp = setInterval(() => {
              if (tempo == 0) {
                document.getElementById("aspec").innerHTML = "PRONTO";
                clearInterval(intervasp);
              } else {
                tempo = updateCountdown("aspec", tempo, intervasp);
              }
            }, 1000);
          }
        } else {
          document.getElementById("aspec").innerHTML = "Armamento in cooldown";
        }
      }
    }
  }
  /**
   * Rapresenta un tipo specifio di nave (PHMS)
   * @class
   * @extends Nave
   */
  class PHMS extends Nave {
    #cooldownaspec1;
    #cooldownaspec2;
    #cooldownaspec3;
    #util1;
    #util2;
    #util3;
    #trov;

    /**
     * Crea una nave PHMS con i seguenti parametri:
     * @constructor richiama il costruttore di Nave
     * @param {boolean} cooldownaspec1 stato della prima arma speciale
     * @param {boolean} cooldownaspec2 stato della seconda arma speciale
     * @param {number} cooldownaspec3 stato della terza arma speciale
     * @param {number} util1 numero di utilizzi della prima arma speciale
     * @param {number} util2 numero di utilizzi della seconda arma speciale
     * @param {number} util3 numero di utilizzi della terza arma speciale
     * @param {boolean} trov controlla se il siluro è stato rilevato utilizzando la seconda e terza arma
     */
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
    /**
     * Restituisce il valore di trov per controllare la presenza del siluro nelle vicinanze
     * @return {boolean} presenza dell'Uboat
     */
    get trov() {
      return this.#trov;
    }
    /**
     * Imposta il valore di trov
     * @param {boolean} trov presenza del siluro
     */
    set trov(trov) {
      this.#trov = trov;
    }
    /**
     * Restituisce il numero di utilizzi della prima arma
     * @return {number} utilizzi primo armamento
     */
    get util1() {
      return this.#util1;
    }
    /**
     * Restituisce il numero di utilizzi della seconda arma
     * @return {number} utilizzi secondo armamento
     */
    get util2() {
      return this.#util2;
    }
    /**
     * Restituisce il numero di utilizzi della terza arma
     * @return {number} utilizzi terzo armamento
     */
    get util3() {
      return this.#util3;
    }
    /**
     * Imposta il numero di utilizzi della prima arma
     * @param {number} util1 utilizzi primo armamento
     */
    set util1(util1) {
      this.#util1 = util1;
    }
    /**
     * Imposta il numero di utilizzi della seconda arma
     * @param {number} util2 utilizzi secondo armamento
     */
    set util2(util2) {
      this.#util2 = util2;
    }
    /**
     * Imposta il numero di utilizzi della terza arma
     * @param {number} util3 utilizzi secondo armamento
     */
    set util3(util3) {
      this.#util3 = util3;
    }
    /**
     * Restituisce lo stato della prima arma
     * @return {boolean} stato prima arma speciale
     */
    get cooldownaspec1() {
      return this.#cooldownaspec1;
    }
    /**
     * Restituisce lo stato della seconda arma
     * @return {boolean} stato seconda arma speciala
     */
    get cooldownaspec2() {
      return this.#cooldownaspec2;
    }
    /**
     * Restituisce lo stato della terza arma
     * @return {boolean} stato terza arma speciale
     */
    get cooldownaspec3() {
      return this.#cooldownaspec3;
    }
    /**
     * Imposta lo stato della prima arma
     * @param {boolean} cooldownaspec1 stato prima arma speciale 1
     */
    set cooldownaspec1(cooldownaspec1) {
      this.#cooldownaspec1 = cooldownaspec1;
    }
    /**
     * Imposta lo stato della seconda arma
     * @param {boolean} cooldownaspec2 stato seconda arma speciale
     */
    set cooldownaspec2(cooldownaspec2) {
      this.#cooldownaspec2 = cooldownaspec2;
    }
    /**
     * Imposta lo stato della terza arma
     * @param {boolean} cooldownaspec3 stato terza arma speciale
     */
    set cooldownaspec3(cooldownaspec3) {
      this.#cooldownaspec3 = cooldownaspec3;
    }

    /**
     * Arma speciale della nave PHMS controlla se l' U-boat è nel range dell'armamento e se è presente lo danneggia
     * @param {Siluro} s oggetto siluro
     */
    aSpec1(s) {
      if (this.util1 != 0) {
        if (!this.cooldownaspec1) {
          let audio = new Audio("sounds/armaer.mp3");
          audio.play();
          this.cooldownaspec1 = true;
          let intervasp;
          this.util--;
          if (
            this.posx + 6 >= s.posx &&
            this.posx - 6 <= s.posx &&
            this.posy + 6 >= s.posy &&
            this.posy - 6 <= s.posy
          ) {
            s.vit = s.vit - 30;
            if (s.vit <= 0) {
              fine(true);
            } else {
              updateHealthBar(document.querySelector(".health"), s.vit);
            }
          }
          setTimeout(() => {
            this.cooldownaspec1 = false;
          }, 20000);
          let tempo = 1 * 20;
          document.getElementById("aspec1").innerHTML =
            Math.floor(tempo / 60) + ":" + (tempo % 60);
          tempo--;
          intervasp = setInterval(() => {
            if (tempo == 0) {
              document.getElementById("aspec1").innerHTML = "PRONTO";
              clearInterval(intervasp);
            } else {
              tempo = updateCountdown("aspec1", tempo, intervasp);
            }
          }, 1000);
        } else {
          document.getElementById("aspec1").innerHTML = "Armamento in cooldown";
        }
      }
    }

    /**
     * Arma speciale della nave PHMS che scannerizza in un area con lunghezza 10 e larghezza 3 intorno alla nave; se l' U-boat è visibile rilascia una sua immagine nella sua posizione per 5 secondi
     * @param {Siluro} s oggetto siluro
     */
    aSpec2(s) {
      if (this.util2 != 0) {
        if (!this.cooldownaspec2) {
          let audio = new Audio("sounds/aer2.mp3");
          audio.play();
          this.cooldownaspec2 = true;
          let intervasp;
          this.util2--;
          if (
            (s.posx <= this.posx + 10 &&
              s.posx >= this.posx - 10 &&
              s.posy <= this.posy + 3 &&
              s.posy >= this.posy - 3) ||
            (s.posy <= this.posy + 10 &&
              s.posy >= this.posy - 10 &&
              s.posx <= this.posx + 3 &&
              s.posx >= this.posx - 3)
          ) {
            let pxtemp = s.posx;
            let pytemp = s.posy;
            document.getElementById(`px${pxtemp}py${pytemp}`).src =
              "image/casellar.png";
            this.trov = true;
            setTimeout(() => {
              if (pxtemp != this.posx || pytemp != this.posy) {
                document.getElementById(`px${pxtemp}py${pytemp}`).src =
                  "image/casella.png";
                this.trov = false;
              }
            }, 5000);
          }
          setTimeout(() => {
            this.cooldownaspec2 = false;
          }, 20000);
          if (this.util2 == 0) {
            document.getElementById("aspec2").innerHTML = "Armamento Esaurito";
          } else {
            let tempo = 1 * 20;
            document.getElementById("aspec2").innerHTML =
              Math.floor(tempo / 60) + ":" + (tempo % 60);
            tempo--;
            intervasp = setInterval(() => {
              if (tempo == 0) {
                document.getElementById("aspec2").innerHTML = "PRONTO";
                clearInterval(intervasp);
              } else {
                tempo = updateCountdown("aspec2", tempo, intervasp);
              }
            }, 1000);
          }
        } else {
          document.getElementById("aspec2").innerHTML = "Armamento in cooldown";
        }
      }
    }
    /**
     * Arma speciale della nave PHMS che scannerizza in un area con lunghezza 8 e larghezza 3 intorno alla nave, se l' U-boat viene trovato comunica la distanza da essa
     * @param {Siluro} s oggetto siluro
     */
    aSpec3(s) {
      if (this.util3 != 0) {
        if (!this.cooldownaspec3) {
          let audio = new Audio("sounds/sonar.mp3");
          audio.play();
          this.cooldownaspec3 = true;
          let intervasp;
          this.util3--;
          let num1 = 0;
          let num2 = 0;
          if (
            (s.posx <= this.posx + 8 &&
              s.posx >= this.posx - 8 &&
              s.posy <= this.posy + 3 &&
              s.posy >= this.posy - 3) ||
            (s.posy <= this.posy + 8 &&
              s.posy >= this.posy - 8 &&
              s.posx <= this.posx + 3 &&
              s.posx >= this.posx - 3)
          ) {
            let pxtemp = s.posx;
            let pytemp = s.posy;
            if (n.posx > s.posx) {
              num1 = Math.pow(n.posx - pxtemp, 2);
            } else {
              num1 = Math.pow(pxtemp - n.posx, 2);
            }
            if (n.posy > s.posy) {
              num2 = Math.pow(n.posy - pytemp, 2);
            } else {
              num2 = Math.pow(pytemp - n.posy, 2);
            }
            document.getElementById("aspec3").innerHTML =
              "Caselle distanza: " +
              Math.floor(Math.sqrt(num1 + num2)) +
              "<div id='aspec3cool'>";
          }
          if (num1 == 0 && num2 == 0) {
            document.getElementById("aspec3").innerHTML = "Uboat non trovato";
          }
          setTimeout(() => {
            document.getElementById("aspec3").innerHTML = "";
          }, 5000);
          if (this.util3 == 0) {
            document.getElementById("aspec3").innerHTML = "Armamento Esaurito";
          } else {
            setTimeout(() => {
              this.cooldownaspec3 = false;
            }, 20000);
            let tempo = 1 * 20;
            document.getElementById("aspec3cool").innerHTML =
              Math.floor(tempo / 60) + ":" + (tempo % 60);
            tempo--;
            intervasp = setInterval(() => {
              if (tempo == 0) {
                document.getElementById("aspec3cool").innerHTML = "PRONTO";
                clearInterval(intervasp);
              } else {
                tempo = updateCountdown("aspec3cool", tempo, intervasp);
              }
            }, 1000);
          }
        } else {
          document.getElementById("aspec3cool").innerHTML =
            "<br>Armamento in cooldown";
        }
      }
    }
  }
  /**
   * Classe che rappresenta il siluro
   * @class
   */
  class Siluro {
    #mov;
    #vit;
    #posx;
    #posy;
    /**
     * Crea un siluro con i seguenti parametri:
     * @constructor
     * @param {number} mov movimento massimo della nave
     * @param {number} vit vita del siluro
     * @var {number} posx posizione del siluro nell'asse x
     * @var {number} posy posizione del siluro nell'asse y
     */
    constructor(mov, vit) {
      this.#mov = mov;
      this.vit = vit;
      this.#posx = cas(10, 39);
      this.#posy = cas(10, 39);
    }
    /**
     * Restituisce lo stato della terza arma
     * @return {number} numero di caselle di movimento
     */
    get mov() {
      return this.#mov;
    }
    /**
     * Restituisce la vita del siluro
     * @return {number} vita dell'Uboat
     */
    get vit() {
      return this.#vit;
    }
    /**
     * Imposta la vita del siluro
     * @param {number} vit vita dell'Uboat
     */
    set vit(vit) {
      this.#vit = vit;
    }
    /**
     * Restituisce la posizione del siluro nell'asse x
     * @return {number} posizione dell'Uboat sulle righe
     */
    get posx() {
      return this.#posx;
    }
    /**
     * Restituisce la posizione del siluro nell'asse y
     * @return {number} posizione dell'Uboat sulle colonne
     */
    get posy() {
      return this.#posy;
    }
    /**
     * Muove il siluro verso l'alto cambiando la variabile posy
     */
    muovisu() {
      if (this.#posy - this.#mov >= 0) {
        this.#posy = this.#posy - this.#mov;
      }
    }
    /**
     * Muove il siluro verso il basso cambiando la variabile posy
     */
    muovigiu() {
      if (this.#posy + this.#mov <= 39) {
        this.#posy = this.#posy + this.#mov;
      }
    }
    /**
     * Muove il siluro verso sinistra cambiando la variabile posx
     */
    muovisin() {
      if (this.#posx - this.#mov >= 0) {
        this.#posx = this.#posx - this.#mov;
      }
    }
    /**
     * Muove il siluro verso destra cambiando la variabile posx
     */
    muovides() {
      if (this.#posx + this.#mov <= 39) {
        this.#posx = this.#posx + this.#mov;
      }
    }
  }

  /**
   * Classe che rappresenta il cannone
   * @class
   */
  class Cannone {
    #git;
    #dan;
    /**
     * Crea un cannone con i seguenti parametri:
     * @constructor
     * @param {number} git gittata del cannone
     * @param {number} dan danni inflitti dal cannone
     */
    constructor(git, dan) {
      this.#git = git;
      this.#dan = dan;
    }
    /**
     * Restituisce la gittata del cannone
     * @return {number} gittata
     */
    get git() {
      return this.#git;
    }
    /**
     * Restituisce i danni del cannone
     * @return {number} danni
     */
    get dan() {
      return this.#dan;
    }
  }

  /**
   *  Indirizza alla pagina gioco
   */
  function gioco() {
    window.location.href = "Gioco.htm";
  }
  /**
   *  Indirizza alla pagina regole
   */
  function regol() {
    window.location.href = "Regole.htm";
  }
  /**
   *  Indirizza alla pagina comandi
   */
  function comands() {
    window.location.href = "Comandi.htm";
  }
  /**
   *  Scelta nave1
   */
  function nave1() {
    gameplay(1);
  }
  /**
   *  Scelta nave2
   */
  function nave2() {
    gameplay(2);
  }
  /**
   *  Scelta nave3
   */
  function nave3() {
    gameplay(3);
  }
  /**
   *  Scelta nave4
   */
  function nave4() {
    gameplay(4);
  }
  /**
   *  Scelta nave5
   */
  function nave5() {
    gameplay(5);
  }
  /**
   * Indirizza alla pagina gameplay
   * @param {number} n variabile che indica la nave selezionata
   */
  function gameplay(n) {
    naveServer = n;
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
    n = new CHMS(4, 5, 6, new Cannone(2, 20), 3);
  }
  if (nave == 2) {
    n = new ILHMS(3, 5, 5, new Cannone(3, 20), 3);
  }
  if (nave == 3) {
    n = new IPHMS(3, 4, 4, new Cannone(3, 25), 2);
  }
  if (nave == 4) {
    n = new CorHMS(3, 4, 3, new Cannone(5, 30), 3);
  }
  if (nave == 5) {
    n = new PHMS(3, 4, 4, new Cannone(0, 0), 999, 3, 3);
  }
  /**
   * Questa funzione crea la tabella di gioco su una base 40*40, inizializza i parametri (armi,timer,sonar) e da il via al gioco
   */
  function inizia() {
    let t = "<table id='table1'>";
    t += "<tr class='campogioco'>";
    t += "<th class='campogioco'>/</th>";
    for (let i = 0; i < 40; i++) {
      if (i + 1 <= 26) {
        t += `<th class='campogioco'>${String.fromCharCode(i + 65)}</th>`;
      } else {
        t += `<th class='campogioco'>${String.fromCharCode(i + 71)}</th>`;
      }
    }
    t += "</tr>";
    for (let i = 0; i < 40; i++) {
      t += "<tr class='campogioco'>";
      t += `<th>${i + 1}</th>`;
      for (let j = 0; j < 40; j++) {
        t += `<td class='campogioco'><img class="casella" src="image/casella.png" id="px${j}py${i}"></td>`;
      }
      t += "</tr>";
    }
    t += "</table>";
    document.getElementById("campo").innerHTML = t;
    if (n instanceof PHMS) {
      document.getElementById("abilita").innerHTML +=
        "<div class='para'>Cannone Inesistente</div>";
      document.getElementById("abilita").innerHTML +=
        "<div class='desc'>Armamento Speciale</div>";
      document.getElementById("abilita").innerHTML +=
        "<div class='para'>Aereo Cannoniere Tasto:P</div>";
      document.getElementById("abilita").innerHTML +=
        "<div id='aspec1' class='desc'>PRONTO</div>";
      document.getElementById("abilita").innerHTML +=
        "<div class='para'>Aereo Ricognitore Tasto:O</div>";
      document.getElementById("abilita").innerHTML +=
        "<div id='aspec2' class='desc'>PRONTO</div>";
      document.getElementById("abilita").innerHTML +=
        "<div class='para'>Aereo Sonar Tasto: I</div>";
      document.getElementById("abilita").innerHTML +=
        "<div id='aspec3cool' class='desc'>PRONTO</div><br><div class='desc' id='aspec3'></div>";
    } else {
      document.getElementById("abilita").innerHTML +=
        "<div class='para'>Cannone</div>";
      document.getElementById("abilita").innerHTML +=
        "<div id='cann' class='desc'>PRONTO</div>";
      document.getElementById("abilita").innerHTML +=
        "<div class='para'>Armamento Speciale</div>";
      document.getElementById("abilita").innerHTML +=
        "<div id='aspec' class='desc'>PRONTO</div>";
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
    interv = setInterval(function () {
      movimentos();
      avviaSonar();
    }, 1000);
    cambiastato();
    window.addEventListener("keydown", function (event) {
      movimenton(event);
      avviaSonar();
    });
  }
  /**
   * Questa funzione serve ad avviare il sonar che controlla se l'Uboat si trova nelle vicinanze, nel caso affermativo, comunica la distanza dal nemico all'utente
   */
  function avviaSonar() {
    let num1;
    let num2;

    if (
      n.son + n.posx >= s.posx &&
      n.posx - n.son <= s.posx &&
      n.son + n.posy >= s.posy &&
      n.posy - n.son <= s.posy
    ) {
      if (n.posx > s.posx) {
        num1 = Math.pow(n.posx - s.posx, 2);
      } else {
        num1 = Math.pow(s.posx - n.posx, 2);
      }
      if (n.posy > s.posy) {
        num2 = Math.pow(n.posy - s.posy, 2);
      } else {
        num2 = Math.pow(s.posy - n.posy, 2);
      }
      document.getElementById("sonar").innerHTML =
        "Caselle distanza: " + Math.floor(Math.sqrt(num1 + num2));
    } else {
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
    setTimeout(function () {
      statos = true;
      setTimeout(function () {
        statos = false;
        document.getElementById(`px${s.posx}py${s.posy}`).src =
          "image/casella.png";
        cambiastato();
      }, 30000);
    }, 40000);
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
          if (
            s.posx <= n.posx + n.vis &&
            s.posx >= n.posx - n.vis &&
            s.posy < n.posy + n.vis &&
            s.posy > n.posy - n.vis
          ) {
            if (s.posx == n.posx && s.posy == n.posy) {
              document.getElementById(`px${s.posx}py${s.posy}`).src =
                "image/casellav.png";
              if (!s.trov) {
                if (pxatt == n.posx) {
                  document.getElementById(`px${pxatt}py${pyatt}`).src =
                    "image/casellav.png";
                } else {
                  if (pxatt != s.posx) {
                    document.getElementById(`px${pxatt}py${s.posy}`).src =
                      "image/casella.png";
                  }
                }
              }
              scoincn = true;
            } else {
              document.getElementById(`px${s.posx}py${s.posy}`).src =
                "image/casellar.png";
              if (!scoincn && !ncoincs) {
                if (pxatt != s.posx) {
                  document.getElementById(`px${pxatt}py${s.posy}`).src =
                    "image/casella.png";
                }
              } else {
                scoincn = false;
              }
            }
          } else {
            document.getElementById(`px${s.posx}py${s.posy}`).src =
              "image/casella.png";
            document.getElementById(`px${pxatt}py${pyatt}`).src =
              "image/casella.png";
          }
        }
        if (n instanceof ILHMS) {
          if (n.b1 != null) {
            if (
              s.posx + 2 >= n.b1.posx &&
              s.posx - 2 <= n.b1.posx &&
              s.posy + 2 >= n.b1.posy &&
              s.posy - 2 <= n.b1.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src =
                "image/casella.png";
              n.b1 = null;
            }
          }
          if (n.b2 != null) {
            if (
              s.posx + 2 >= n.b2.posx &&
              s.posx - 2 <= n.b2.posx &&
              s.posy + 2 >= n.b2.posy &&
              s.posy - 2 <= n.b2.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src =
                "image/casella.png";
              n.b2 = null;
            }
          }
          if (n.b3 != null) {
            if (
              s.posx + 2 >= n.b3.posx &&
              s.posx - 2 <= n.b3.posx &&
              s.posy + 2 >= n.b3.posy &&
              s.posy - 2 <= n.b3.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src =
                "image/casella.png";
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
          if (
            s.posx <= n.posx + n.vis &&
            s.posx >= n.posx - n.vis &&
            s.posy < n.posy + n.vis &&
            s.posy > n.posy - n.vis
          ) {
            if (s.posx == n.posx && s.posy == n.posy) {
              document.getElementById(`px${s.posx}py${s.posy}`).src =
                "image/casellav.png";
              if (!s.trov) {
                if (pxatt == n.posx) {
                  document.getElementById(`px${pxatt}py${pyatt}`).src =
                    "image/casellav.png";
                } else {
                  if (pxatt != s.posx) {
                    document.getElementById(`px${pxatt}py${s.posy}`).src =
                      "image/casella.png";
                  }
                }
              }
              scoincn = true;
            } else {
              document.getElementById(`px${s.posx}py${s.posy}`).src =
                "image/casellar.png";
              if (!scoincn && !ncoincs) {
                if (pxatt != s.posx) {
                  document.getElementById(`px${pxatt}py${s.posy}`).src =
                    "image/casella.png";
                }
              } else {
                scoincn = false;
              }
            }
          } else {
            document.getElementById(`px${s.posx}py${s.posy}`).src =
              "image/casella.png";
            document.getElementById(`px${pxatt}py${pyatt}`).src =
              "image/casella.png";
          }
        }
        if (n instanceof ILHMS) {
          if (n.b1 != null) {
            if (
              s.posx + 2 >= n.b1.posx &&
              s.posx - 2 <= n.b1.posx &&
              s.posy + 2 >= n.b1.posy &&
              s.posy - 2 <= n.b1.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src =
                "image/casella.png";
              n.b1 = null;
            }
          }
          if (n.b2 != null) {
            if (
              s.posx + 2 >= n.b2.posx &&
              s.posx - 2 <= n.b2.posx &&
              s.posy + 2 >= n.b2.posy &&
              s.posy - 2 <= n.b2.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src =
                "image/casella.png";
              n.b2 = null;
            }
          }
          if (n.b3 != null) {
            if (
              s.posx + 2 >= n.b3.posx &&
              s.posx - 2 <= n.b3.posx &&
              s.posy + 2 >= n.b3.posy &&
              s.posy - 2 <= n.b3.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src =
                "image/casella.png";
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
          if (
            s.posx < n.posx + n.vis &&
            s.posx > n.posx - n.vis &&
            s.posy < n.posy + n.vis &&
            s.posy > n.posy - n.vis
          ) {
            if (s.posx == n.posx && s.posy == n.posy) {
              document.getElementById(`px${s.posx}py${s.posy}`).src =
                "image/casellav.png";
              if (!s.trov) {
                if (pyatt == n.posy) {
                  document.getElementById(`px${pxatt}py${pyatt}`).src =
                    "image/casellav.png";
                } else {
                  if (pyatt != s.posy) {
                    document.getElementById(`px${pxatt}py${pyatt}`).src =
                      "image/casella.png";
                  }
                }
              }
              scoincn = true;
            } else {
              document.getElementById(`px${s.posx}py${s.posy}`).src =
                "image/casellar.png";
              if (!scoincn && !ncoincs) {
                if (s.posy != pyatt) {
                  document.getElementById(`px${s.posx}py${pyatt}`).src =
                    "image/casella.png";
                }
              } else {
                scoincn = false;
              }
            }
          } else {
            document.getElementById(`px${s.posx}py${s.posy}`).src =
              "image/casella.png";
            document.getElementById(`px${pxatt}py${pyatt}`).src =
              "image/casella.png";
          }
        }
        if (n instanceof ILHMS) {
          if (n.b1 != null) {
            if (
              s.posx + 2 >= n.b1.posx &&
              s.posx - 2 <= n.b1.posx &&
              s.posy + 2 >= n.b1.posy &&
              s.posy - 2 <= n.b1.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src =
                "image/casella.png";
              n.b1 = null;
            }
          }
          if (n.b2 != null) {
            if (
              s.posx + 2 >= n.b2.posx &&
              s.posx - 2 <= n.b2.posx &&
              s.posy + 2 >= n.b2.posy &&
              s.posy - 2 <= n.b2.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src =
                "image/casella.png";
              n.b2 = null;
            }
          }
          if (n.b3 != null) {
            if (
              s.posx + 2 >= n.b3.posx &&
              s.posx - 2 <= n.b3.posx &&
              s.posy + 2 >= n.b3.posy &&
              s.posy - 2 <= n.b3.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src =
                "image/casella.png";
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
          if (
            s.posx < n.posx + n.vis &&
            s.posx > n.posx - n.vis &&
            s.posy < n.posy + n.vis &&
            s.posy > n.posy - n.vis
          ) {
            if (s.posx == n.posx && s.posy == n.posy) {
              document.getElementById(`px${s.posx}py${s.posy}`).src =
                "image/casellav.png";
              if (!s.trov) {
                if (pyatt == n.posy) {
                  document.getElementById(`px${pxatt}py${pyatt}`).src =
                    "image/casellav.png";
                } else {
                  if (pyatt != s.posy) {
                    document.getElementById(`px${pxatt}py${pyatt}`).src =
                      "image/casella.png";
                  }
                }
              }
              scoincn = true;
            } else {
              document.getElementById(`px${s.posx}py${s.posy}`).src =
                "image/casellar.png";
              if (!scoincn && !ncoincs) {
                if (s.posy != pyatt) {
                  document.getElementById(`px${s.posx}py${pyatt}`).src =
                    "image/casella.png";
                }
              } else {
                scoincn = false;
              }
            }
          } else {
            document.getElementById(`px${s.posx}py${s.posy}`).src =
              "image/casella.png";
            document.getElementById(`px${pxatt}py${pyatt}`).src =
              "image/casella.png";
          }
        }
        if (n instanceof ILHMS) {
          if (n.b1 != null) {
            if (
              s.posx + 2 >= n.b1.posx &&
              s.posx - 2 <= n.b1.posx &&
              s.posy + 2 >= n.b1.posy &&
              s.posy - 2 <= n.b1.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b1.posx}py${n.b1.posy}`).src =
                "image/casella.png";
              n.b1 = null;
            }
          }
          if (n.b2 != null) {
            if (
              s.posx + 2 >= n.b2.posx &&
              s.posx - 2 <= n.b2.posx &&
              s.posy + 2 >= n.b2.posy &&
              s.posy - 2 <= n.b2.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b2.posx}py${n.b2.posy}`).src =
                "image/casella.png";
              n.b2 = null;
            }
          }
          if (n.b3 != null) {
            if (
              s.posx + 2 >= n.b3.posx &&
              s.posx - 2 <= n.b3.posx &&
              s.posy + 2 >= n.b3.posy &&
              s.posy - 2 <= n.b3.posy
            ) {
              s.vit = s.vit - 35;
              if (s.vit <= 0) {
                fine();
              } else {
                updateHealthBar(document.querySelector(".health"), s.vit);
              }
              document.getElementById(`px${n.b3.posx}py${n.b3.posy}`).src =
                "image/casella.png";
              n.b3 = null;
            }
          }
        }
        break;
    }
  }
  /**
   * Questa variabile imposta il cooldown del movimento della nave (che dura 150 millisecondi)
   */
  let possmov = true;
  /**
   * Questa funzione si occupa del movimento della nave. A seconda di un evento, cioè la pressione di un tasto della tastiera, la nave svolgerà una particolare funzione, tra cui i movimento, lo sparo, o l'utilizzo di uno degli armamenti speciali. Controlla anche se le posizioni dell'Uboat e della nave coincidono, in caso affermativo, rimpiazza l'immagine in quella posizione a quella della nave
   * @param {event} event
   */
  function movimenton(event) {
    if (possmov) {
      possmov = false;
      setTimeout(() => {
        possmov = true;
      }, 150);
      let posatt;
      switch (event.key) {
        case "D":
        case "d":
          posatt = n.posx;
          n.muovides();
          if (n.posx == s.posx && n.posy == s.posy) {
            document.getElementById(`px${n.posx}py${n.posy}`).src =
              "image/casellav.png";
            if (posatt != n.posx) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(
                  `px${n.posx - (n.posx - posatt)}py${n.posy}`
                ).src = "image/mina.png";
              } else {
                document.getElementById(
                  `px${n.posx - (n.posx - posatt)}py${n.posy}`
                ).src = "image/casella.png";
              }
            }
            ncoincs = true;
          } else {
            document.getElementById(`px${n.posx}py${n.posy}`).src =
              "image/casellav.png";
            if (posatt != n.posx) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(
                  `px${n.posx - (n.posx - posatt)}py${n.posy}`
                ).src = "image/mina.png";
              } else {
                document.getElementById(
                  `px${n.posx - (n.posx - posatt)}py${n.posy}`
                ).src = "image/casella.png";
              }
            }
            ncoincs = false;
          }
          break;
        case "A":
        case "a":
          posatt = n.posx;
          n.muovisin();
          if (n.posx == s.posx && n.posy == s.posy) {
            document.getElementById(`px${n.posx}py${n.posy}`).src =
              "image/casellav.png";
            if (posatt != n.posx) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(
                  `px${n.posx + (posatt - n.posx)}py${n.posy}`
                ).src = "image/mina.png";
              } else {
                document.getElementById(
                  `px${n.posx + (posatt - n.posx)}py${n.posy}`
                ).src = "image/casella.png";
              }
            }
            ncoincs = true;
          } else {
            document.getElementById(`px${n.posx}py${n.posy}`).src =
              "image/casellav.png";
            if (posatt != n.posx) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(
                  `px${n.posx + (posatt - n.posx)}py${n.posy}`
                ).src = "image/mina.png";
              } else {
                document.getElementById(
                  `px${n.posx + (posatt - n.posx)}py${n.posy}`
                ).src = "image/casella.png";
              }
            }
            ncoincs = false;
          }
          break;
        case "W":
        case "w":
          posatt = n.posy;
          n.muovisu();
          if (n.posx == s.posx && n.posy == s.posy) {
            document.getElementById(`px${n.posx}py${n.posy}`).src =
              "image/casellav.png";
            if (posatt != n.posy) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(
                  `px${n.posx}py${n.posy + (posatt - n.posy)}`
                ).src = "image/mina.png";
              } else {
                document.getElementById(
                  `px${n.posx}py${n.posy + (posatt - n.posy)}`
                ).src = "image/casella.png";
              }
            }
            ncoincs = true;
          } else {
            document.getElementById(`px${n.posx}py${n.posy}`).src =
              "image/casellav.png";
            if (posatt != n.posy) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(
                  `px${n.posx}py${n.posy + (posatt - n.posy)}`
                ).src = "image/mina.png";
              } else {
                document.getElementById(
                  `px${n.posx}py${n.posy + (posatt - n.posy)}`
                ).src = "image/casella.png";
              }
            }
            ncoincs = false;
          }
          break;
        case "S":
        case "s":
          posatt = n.posy;
          n.muovigiu();
          if (n.posx == s.posx && n.posy == s.posy) {
            document.getElementById(`px${n.posx}py${n.posy}`).src =
              "image/casellav.png";
            if (posatt != n.posy) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(
                  `px${n.posx}py${n.posy - (n.posy - posatt)}`
                ).src = "image/mina.png";
              } else {
                document.getElementById(
                  `px${n.posx}py${n.posy - (n.posy - posatt)}`
                ).src = "image/casella.png";
              }
            }
            ncoincs = true;
          } else {
            document.getElementById(`px${n.posx}py${n.posy}`).src =
              "image/casellav.png";
            if (posatt != n.posy) {
              if (n.utilmin) {
                n.utilmin = false;
                document.getElementById(
                  `px${n.posx}py${n.posy - (n.posy - posatt)}`
                ).src = "image/mina.png";
              } else {
                document.getElementById(
                  `px${n.posx}py${n.posy - (n.posy - posatt)}`
                ).src = "image/casella.png";
              }
            }
            ncoincs = false;
          }
          break;
        case "L":
        case "l":
          if (!(n instanceof PHMS)) {
            let intervcan;
            if (!n.cooldowncan) {
              let audio = new Audio("sounds/sparo.mp3");
              audio.play();
              n.cooldowncan = true;
              if (
                n.can.git + n.posx >= s.posx &&
                n.posx - n.can.git <= s.posx &&
                n.posy + n.can.git >= s.posy &&
                n.posy - n.can.git <= s.posy
              ) {
                s.vit = s.vit - n.can.dan;
                if (s.vit <= 0) {
                  fine(true);
                } else {
                  updateHealthBar(document.querySelector(".health"), s.vit);
                }
              }
              setTimeout(() => {
                n.cooldowncan = false;
              }, 10000);
              let tempo = 1 * 10;
              document.getElementById("cann").innerHTML =
                Math.floor(tempo / 60) + ":" + (tempo % 60);
              tempo--;
              intervcan = setInterval(() => {
                if (tempo == 0) {
                  document.getElementById("cann").innerHTML = "PRONTO";
                  clearInterval(intervcan);
                } else {
                  tempo = updateCountdown("cann", tempo, intervcan);
                }
              }, 1000);
            } else {
              document.getElementById("cann").innerHTML = "Cannone in cooldown";
            }
          }
          break;
        case "K":
        case "k":
          if (!(n instanceof PHMS)) {
            n.aSpec(s);
          }
          break;
        case "P":
        case "p":
          if (n instanceof PHMS) {
            n.aSpec1(s);
          }
          break;
        case "O":
        case "o":
          if (n instanceof PHMS) {
            n.aSpec2(s);
          }
          break;
        case "I":
        case "i":
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
    document.addEventListener("DOMContentLoaded", function () {
      updateHealthBar(document.querySelector(".health"), s.vit);
    });
  }

  if (page != "gameplay.htm" && page != "index.htm" && page != "fine.htm") {
    document.addEventListener("keyup", (e) => {
      if (e.key == "Escape") {
        history.back();
      }
    });
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
      document.getElementById("fine").innerHTML +=
        "<div class='titolo'>HAI VINTO</div><br><div class='schermata_f'>Congratulazioni!</div> <div class='coppa'><img src='image/coppa.png'></div> <input type='button' class='bott2' value='Rigioca' onclick='restart()'>";
    } else {
      document.getElementById("fine").innerHTML +=
        "<div class='titolof'>HAI PERSO</div><br><div class='schermata_f'>Peccato!</div><div class='coppa'><img src='image/fineimm.png'></div><input type='button' class='bott2' value='Rigioca' onclick='restart()'>";
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
    document.getElementById("countdown").innerHTML =
      Math.floor(tempo / 60) + ":" + (tempo % 60) + "0";
    tempo--;
    refreshIntervalId = setInterval(() => {
      tempo = updateCountdown("countdown", tempo, refreshIntervalId);
    }, 1000);
  }
  /**
   * Questa funzione aggiorna qualsiasi countdown in tutto il programma, anche i cooldown delle armi, diminuendo una variabile che indica il tempo rimanente.
   * @param {number} id Id del chiamante della funzione
   * @param {number} temp Variabile che indica se il countdown principale è terminato
   * @param {number} int Variabile che interrompe l'intervallo del chiamante
   * @returns
   */
  function updateCountdown(id, temp, int) {
    const minuti = Math.floor(temp / 60);
    let secondi = temp % 60;

    secondi = secondi < 10 ? "0" + secondi : secondi;
    const contdownEl = document.getElementById(id);
    contdownEl.innerHTML = `${minuti}:${secondi}`;

    temp--;
    tempoServer = temp;
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
      window.location.href = `caricamentoServer.php?esit=${esito}&nave=${naveServer}&tempo=${tempoServer}`;
    } else {
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
    if (
      nave1 >= 39 &&
      nave1 <= 0 &&
      nave >= 39 &&
      nave <= 0 &&
      nave2 >= 39 &&
      nave2 <= 0 &&
      nave3 >= 39 &&
      nave3 <= 0 &&
      nave4 >= 39 &&
      nave4 < 0
    ) {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
      console.log("no");
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
    if (
      nave1 >= 39 &&
      nave1 <= 0 &&
      nave >= 39 &&
      nave <= 0 &&
      nave2 >= 39 &&
      nave2 <= 0 &&
      nave3 >= 39 &&
      nave3 <= 0 &&
      nave4 >= 39 &&
      nave4 < 0
    ) {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
      console.log("no");
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
    if (
      nave1 >= 39 &&
      nave1 <= 0 &&
      nave >= 39 &&
      nave <= 0 &&
      nave2 >= 39 &&
      nave2 <= 0 &&
      nave3 >= 39 &&
      nave3 <= 0 &&
      nave4 >= 39 &&
      nave4 < 0
    ) {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
      console.log("no");
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

    if (
      nave1 >= 39 &&
      nave1 <= 0 &&
      nave >= 39 &&
      nave <= 0 &&
      nave2 >= 39 &&
      nave2 <= 0 &&
      nave3 >= 39 &&
      nave3 <= 0 &&
      nave4 >= 39 &&
      nave4 < 0
    ) {
      console.log(nave.posx, nave.posy);
      console.log(nave1.posx, nave1.posy);
      console.log(nave2.posx, nave2.posy);
      console.log(nave3.posx, nave3.posy);
      console.log(nave4.posx, nave4.posy);
      console.log("no");
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
    window.location.href = "menu.php";
  }
  function logout() {
    window.location.href = "logOut.php";
  }
}
