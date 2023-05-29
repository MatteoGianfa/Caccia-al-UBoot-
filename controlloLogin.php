<?php


            if(isset($_POST['user'])&&isset($_POST['password'])){

                require_once "config.php";
                $conn=new mysqli(
                  $config["mysql_host"],
                  $config["mysql_user"],
                  $config["mysql_password"],
                  $config["mysql_db"]
                );
                if($conn->connect_error){
    
                        header('Location: index.php?error=5') ;
    
                }else{
                        $nickname=$_REQUEST['user'];
                        $password=$_REQUEST['password'];
                        $queryCredenziali="SELECT nickname,password FROM utente WHERE nickname='$nickname' && password=MD5('$password')";
                        $rispostaCredenziali=$conn->query($queryCredenziali);
                        if($rispostaCredenziali->num_rows==1){
                                

                                session_start();
                                $_SESSION["user"]=$nickname;
                                $_SESSION["password"]=$password;
                                $conn->close();
                                header('Location:menu.htm');
                                

                        }else if($rispostaCredenziali->num_rows==0){
                                $conn->close();
                                header('Location:index.php?error=3');


                        }
                        else{
                                $conn->close();
                                header('Location:index.php?error=2');


                        }



                }




                $conn->close();
            }else{


                    header('Location: index.php?error=4') ;


            }
        
