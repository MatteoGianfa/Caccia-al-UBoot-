<?php
        if(isset($_POST["user"])&&isset($_POST["email"])&&isset($_POST["password"])){

                require_once "config.php";
                $conn=new mysqli(
                  $config["mysql_host"],
                  $config["mysql_user"],
                  $config["mysql_password"],
                  $config["mysql_db"]
                );
                if($conn->connect_error){
    
                        header('Location: registrazione.php?error=3') ;
    
                }else{

                    $user=$_POST["user"];
                    $password=$_POST["password"];
                    $email=$_POST["email"];
                    $queryControlloRegistrazione="SELECT * FROM utente";
                    $listaID=array();
                    $rispostaControlloCredenziali=$conn->query($queryControlloRegistrazione);
               
                        
                        while($listaCredenziali=$rispostaControlloCredenziali->fetch_array(MYSQLI_BOTH)){
                                if($listaCredenziali["nickname"]==$user||$listaCredenziali["email"]==$email){
                                        $conn->close();
                                        header('Location: registrazione.php?error=2') ; 

                                }
                                array_push($listaID,$listaCredenziali["ID"]);
                                  
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
                    $queryNuovaRegistrazione="INSERT INTO `utente`(`ID`, `nickname`, `email`, `password`) VALUES ('$IDNuovo','$user','$email',MD5('$password'))";
                    if($conn->query($queryNuovaRegistrazione)){
                        header("Location:index.php");
                    }else{
                        $conn->close();
                        header("Location:Registrazione.php?error=1");

                    }
                }

        }else{

                
                header('Location: registrazione.php?error=4') ;

        }

?>