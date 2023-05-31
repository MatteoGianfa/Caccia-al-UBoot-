<?php
        if(isset($_REQUEST["tempo"])&&isset($_REQUEST["nave"])){
            require_once "config.php";
                $conn=new mysqli(
                  $config["mysql_host"],
                  $config["mysql_user"],
                  $config["mysql_password"],
                  $config["mysql_db"]
                );

                $tempo=$_REQUEST["tempo"];
                $nave=$_REQUEST["nave"];
                $esito=$_REQUEST["esit"];


                $queryControlloID="SELECT ID FROM risultato";
                $rispostaQuery=$conn->query($queryControlloID);
               $listaID=array();
                while($queryID=$rispostaQuery->fetch_array(MYSQLI_BOTH)){


                    array_push($listaID,$queryID["ID"]);  


                }

                    $conferma=false;
                        
                        while(!$conferma){
                        $elementoTrovato=false;
                         $IDNuovo=rand(0,9999);       
                        for($NID=0;$NID<count($listaID);$NID++){

                                if($IDNuovo==$listaID[$NID]){

                                        $NID=count($listaID);
                                        $elementoTrovato=true;
                                }

                        }
                        if(!$elementoTrovato){

                                $conferma=true;

                        }
                
                    }
                    $TipoNave="";
                    switch($nave){

                        case 1:
                            $TipoNave="cacciatorpediniere";
                                break;
                       case 2:
                            $TipoNave="incrociatore leggero";
                                break;
                        case 3:
                            $TipoNave="incrociatore pesante";
                                break;
                        case 4:
                            $TipoNave="corazzata";
                                break;
                         case 5:
                            $TipoNave="portaerei";
                                break;



                    };
                $nickname=$_SESSION["user"];
                $queryIDUser="SELECT ID FROM utente where nickname=$nickname";
                $ris=$conn->query($queryIDUser);
                $IDUser=$ris->fetch_array(MYSQLI_BOTH);
                $IDGiocatore=$IDUser["ID"];
                $QueryInserimento="INSERT INTO `risultato`(`ID`, `ID_utente`, `data`, `tempo`, `tipoNave`) VALUES ($IDNuovo,$IDGiocatore,CURRDATE,$tempo,'$TipoNave')";
                if($conn->query($QueryInserimento)){
                        header("Location:fine.htm?esit=$esito`");
                    }

            }else{


                die("<p>errore</p>");

            }

?>