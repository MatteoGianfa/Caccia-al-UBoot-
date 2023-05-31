<!DOCTYPE html>
<html lang="it">
  <head>
    <?php session_start(); ?>
    <link rel="stylesheet" href="stile.css" />
    <link rel="stylesheet" href="mobile.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="image/favicon.jpg" />
    <script src="script.js"></script>
    <script src="mobile.js"></script>
    <title>Home</title>
  </head>
  <body>
    <div class="schermata">
      <div class="titolo">Caccia all'Uboat</div>
      <div class="comand">
        <h3 class="titoloBenvenuto ">benvenuto <?php echo 
        $_SESSION["user"];?></h3>
        <input
          type="button"
          class="bott"
          onclick="gioco()"
          value="Gioca"
        /><br />
        <input
          type="button"
          class="bott"
          onclick="regol()"
          value="Regole"
        /><br />
        <input
          type="button"
          class="bott"
          onclick="comands()"
          value="Comandi"
        /><br />
        <form action="classifica.php" method="post">
          <input class="bott" type="submit" value="classifica" />
        </form>
      </div>
    </div>
  </body>
</html>
