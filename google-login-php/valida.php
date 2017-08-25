<?php

session_start();

$email = filter_input(INPUT_POST, 'userEmail', FILTER_SANITIZE_STRING);

echo $email;