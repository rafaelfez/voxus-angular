<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>Login</title>
    <meta charset="utf-8">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="838722898795-4mh08567bs4uejh1386ke3j6dm43cq48.apps.googleusercontent.com">
    <link rel="stylesheet" href="css/style.css" type="text/css">
  </head>
  <body>
    <div class="login">
        <img src="inc/img/voxus_logo_company.png" alt="voxus-logo">
        <span class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></span>
    </div>
    <p id = 'msg'></p>
    
    <script>
            function onSignIn(googleUser) {
                var profile = googleUser.getBasicProfile();
                var userId = profile.getId();
                var userName = profile.getName();
                var userImg = profile.getImageUrl();
                var userEmail = profile.getEmail();
                var userToken = googleUser.getAuthResponse().id_token;

                window.location.assign("dash.php");
            }
        </script>

        
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  </body>
</html>