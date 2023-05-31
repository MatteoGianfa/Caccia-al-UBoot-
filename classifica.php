<html>
  <head>
    <title>classifica</title>
    <link rel="stylesheet" href="stile.css">
    <link rel="stylesheet" href="mobile.css">
    <link rel="icon" href="image/favicon.jpg">
  </head>
  <body class="schermataLogin">
    <div>
      <h1 class="titolo">Classifica giocatori</h1>
      <?php
        require_once "config.php";
                $conn=new mysqli(
                  $config["mysql_host"],
                  $config["mysql_user"],
                  $config["mysql_password"],
                  $config["mysql_db"]
                );
      
            $queryClassifica="SELECT u.nickname,r.data,r.tempo,r.tipoNave FROM utente u INNER JOIN risultato r ON u.ID=r.ID_utente ORDER BY(r.tempo);";
            $ris=$conn->query($queryClassifica);?>
            <div>
                <table class="center">
                  <tr><th>posizione</th><th>nickname</th><th>data</th><th>tempo</th><th>tipoNave</th></tr>
            <?php 
            $posizione=1;
              
                while($Classifica=$ris->fetch_array(MYSQLI_BOTH)){
                  $secondi=$Classifica['tempo']%60;
                  $minuti=($Classifica['tempo']-$secondi)/60;
                 
                  if($posizione<=10){
                    echo"<tr>";
                             echo"<td>";
                                    echo$posizione;
                            echo"</td>";
                            echo"<td>";
                                    echo$Classifica["nickname"];
                            echo"</td>";
                            echo"<td>";
                                    echo$Classifica["data"];
                            echo"</td>";
                            echo"<td>";
                                    echo $minuti.":".$secondi;
                            echo"</td>";
                            echo"<td>";
                                    echo$Classifica['tipoNave'];
                            echo"</td>";
                    echo"</tr>";
                    $posizione++;
                  }
            }

      ?>
                </table>
            </div>
    </div>
  </body>
</html>
