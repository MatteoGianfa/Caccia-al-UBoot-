<html>
  <head>
    <title>Login</title>
  </head>
  <body>
    <div>
      <h1>Classifica giocatori</h1>
      <?php
        require_once "config.php";
                $conn=new mysqli(
                  $config["mysql_host"],
                  $config["mysql_user"],
                  $config["mysql_password"],
                  $config["mysql_db"]
                );
      
            $queryClassifica="SELECT* FROM utente u INNER JOIN risultato r ON u.ID=r.ID_utente ORDER BY(r.tempo)";
            $ris=$conn->query($queryClassifica);?>
                <table>
                    
            <?php 
                while($Classifica=$ris->fetch_array(MYSQLI_BOTH)){
                    echo"<tr>";
                            echo"<td>";
                                
                            echo"</td>";
                    echo"</tr>";
            }

      ?>
                </table>
    </div>
  </body>
</html>
