<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <script src="js/validate.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<form action="login.php" method="POST" id="loginForm" onsubmit="return validateForm()" novalidate class="needs-validation">
    <label for="username">
        <input id="username" name="username" type="text" required>
    </label>
    <label for="password">
        <input  id="password" type="password" name="password" required>
    </label>
    <input type="submit" value="Iniciar Sesión">
    <p>
        <i id="errorSubmit">Aquí va el error</i>
    </p>
</form>
</body>
</html>

<?php
