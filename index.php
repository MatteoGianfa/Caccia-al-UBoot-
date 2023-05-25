<html>
  <head>
    <title>Login</title>
  </head>
  <body>
    <div>
      <h1>Accedi</h1>
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
