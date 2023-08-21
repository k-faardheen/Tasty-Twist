<?php
require('./vendor/autoload.php');
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

require('cors.php');
cors();

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__); // Assuming .env is in the same directory
$dotenv->load();
$API_KEY = $_ENV['API_KEY'];

if ($_SERVER["REQUEST_METHOD"] === 'GET') {
    $param = $_GET["ingredients"];
    $number = 30;
    $data = file_get_contents("https://api.spoonacular.com/recipes/findByIngredients?apiKey=$API_KEY&ingredients=$param&number=$number");
    echo $data;
}