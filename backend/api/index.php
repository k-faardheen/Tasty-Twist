<?php
declare(strict_types=1);
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

spl_autoload_register(function ($class) {
    require __DIR__ . "/src/$class.php";
});

$parts = explode("/", $_SERVER["REQUEST_URI"]);


$database = new Database("localhost", "tasty_twist", "root", "");
$gateway = new Gateway($database);

$controller = new Controller($gateway);
$controller->processRequest($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);

?>