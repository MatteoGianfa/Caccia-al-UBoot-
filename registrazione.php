<html>
  <head>
    <title>Registrazione</title>
    <link rel="stylesheet" href="stile.css">
    <link rel="stylesheet" href="mobile.css">
    <link rel="icon" href="image/favicon.jpg">
  </head>
  <body>
    <div>
      <h1>Registrazione</h1>
      <?php
            if(isset($_GET["error"])){
              $errore=$_GET["error"];
              switch($errore) {

                case 1:  
                  break;
                case 2:  
                    echo"<h3>credenziali già usate</h3>";
                  break;
                case 3:  

                  echo"<h3>errore collegamento server</h3>";
                  break;
                case 4:  

                  echo"<h3>errore dati non presenti</h3>";
                break;

                  default:
                  echo"<h3>errore sconosciuto</h3>";
              }


            }



      ?>
      <form action="controlloRegistrazione.php" method="POST">
      <label for="user">nome utente:</label>
        <input
          type="text"
          name="user"
          placeholder="....." required
        /><br />
        <label for="email">email:</label>
        <input
          type="text"
          name="email"
          placeholder="......" required
        /><br />
        <label for="password">password:</label>
        <input
          type="text"
          name="password"
          placeholder="......" required
        /><br />
        <div class="button">
        <input class="bott1" type="submit" value="Registrati" />
       </div>
    </div>
  </body>
</html>