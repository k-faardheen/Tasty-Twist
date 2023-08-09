<?php
declare(strict_types=1);
header('Content-Type: application/json');

spl_autoload_register(function ($class) {
    require __DIR__ . "/src/$class.php";
});

$parts = explode("/", $_SERVER["REQUEST_URI"]);


$controller = new ApiController;
$controller->processRequest($_SERVER["REQUEST_METHOD"]);

?>