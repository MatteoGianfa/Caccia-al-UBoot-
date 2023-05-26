<html>
  <head>
    <title>Login</title>
  </head>
  <body>
    <div>
      <h1>Accedi</h1>
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
      <form action="controlloLogin.php" method="POST">
        <input
          type="text"
          name="user"
          placeholder="Inserisci il nickname" required
        /><br />
        <input
          type="text"
          name="password"
          placeholder="Inserisci il password" required
        /><br />
        <input type="submit" value="ACCEDI" />
      </form>
    </div>
  </body>
</html>
