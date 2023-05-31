<!DOCTYPE html>
<html lang="it">
  <head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="stile.css">
    <link rel="stylesheet" href="mobile.css">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="image/favicon.jpg">
  </head>
  <body class="schermataLogin">
    <div id="login">
      <h1 class="titoloLogin">Accedi</h1>
      <?php
        if(isset($_REQUEST['error'])){
          $errore=$_REQUEST['error'];
          switch($errore){
            case 2:
              echo"<h3>credenziali doppie</h3>";
              break;
            case 3:
                  echo"<h3>credenziali errate</h3>";
                  break;
            case 4:
              echo"<h3>errore, inserire le credenziali</h3>";
              break;

            case 5:
                echo"<h3>errore comunicazione server</h3>";
                break;

            default:
              echo"<h3> errore sconosciuto</h3>";
          }
        }
      ?>
    <div id="datiForm">
      <form autocomplete="off" action="controlloLogin.php" method="POST">
        <label for="user">nome utente</label>
        <input 
          autocomplete="off"
          type="text"
          name="user"
          placeholder="Inserisci il nickname" required
        /><br />
        <label for="user">password</label>
        <input
          autocomplete="off"
          type="text"
          name="password"
          placeholder="Inserisci la password" required
        /><br />
        <div class="button">
        <input class="bott1"  type="submit" value="ACCEDI" />
        </div>
      </form>
      </div>
      <div>
        <p>non sei ancora registrato?</p>
        <a class="transizione" href="registrazione.php">registrati qui</a>
      </div>
    </div>
  </body>
</html>