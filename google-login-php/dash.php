<?php

session_start();

$email = filter_input(INPUT_POST, 'userEmail', FILTER_SANITIZE_STRING);

echo $email;
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>ADM</title>
    <meta charset="utf-8">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="66235166299-5mm5lqd7ue9g1haq43g4f1r2oep7cbm5.apps.googleusercontent.com">
  </head>
    <body>
        <a href="login.php" onclick="signOut();">Sign out</a>
        <script>
        function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
            console.log('User signed out.');
            });
        }
        </script>
    </body>
</html>