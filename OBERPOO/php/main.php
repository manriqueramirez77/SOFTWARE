<?php
require_once("car.php");
require_once("check.php");
require_once("check.php");
require_once("user.php");
require_once("account.php");

$car = new Car("KOTLA123", new Account("Govzalo Rivera", "A5032360", "govzalo@platzi.pc", "1253690"));
$car->printDataUser();

$uberx = new UberX("A5041758", new Account("Molando Villa", "PhL023360", "polando@platzi.pc", "1259633"), "Toyota", "Corolla");
$uberx->printDataUser();

$user = new User("Merlo Villa", "50125360", "merlo@platzi.pc", "452860");
$user->printDataUser();
$user->printDataUser();