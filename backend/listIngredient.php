<?php
require_once('connection.php');
require_once('./lib/nusoap.php');

function fetchIngredients()
{

    
    global $conn;

    $chicken_sql = 'SELECT * FROM Chickens';
    $beef_sql = 'SELECT * FROM Beef';
    $seafood_sql = 'SELECT * FROM Seafood';
    $herb_spices_sql = 'SELECT * FROM Herbs_Spices';
    $pantry_essentials_sql = 'SELECT * FROM Pantry_Essentials';
    $veg_greens_sql = 'SELECT * FROM Vegetables_Greens';
    $fruits_sql = 'SELECT * FROM Fruits';
    $cheeses_sql = 'SELECT * FROM Cheeses';
    $dairy_eggs_sql = 'SELECT * FROM Dairy_Eggs';

    $chicken_result = mysqli_query($conn, $chicken_sql);
    $beef_result = mysqli_query($conn, $beef_sql);
    $seafood_result = mysqli_query($conn, $seafood_sql);
    $herb_spices_result = mysqli_query($conn, $herb_spices_sql);
    $pantry_essentials_result = mysqli_query($conn, $pantry_essentials_sql);
    $veg_greens_result = mysqli_query($conn, $veg_greens_sql);
    $fruits_result = mysqli_query($conn, $fruits_sql);
    $cheeses_result = mysqli_query($conn, $cheeses_sql);
    $dairy_eggs_result = mysqli_query($conn, $dairy_eggs_sql);

    $chicken = mysqli_fetch_all($chicken_result, MYSQLI_ASSOC);
    $beef = mysqli_fetch_all($beef_result, MYSQLI_ASSOC);
    $seafood = mysqli_fetch_all($seafood_result, MYSQLI_ASSOC);
    $herb_spices = mysqli_fetch_all($herb_spices_result, MYSQLI_ASSOC);
    $pantry_essentials = mysqli_fetch_all($pantry_essentials_result, MYSQLI_ASSOC);
    $veg_greens = mysqli_fetch_all($veg_greens_result, MYSQLI_ASSOC);
    $fruits = mysqli_fetch_all($fruits_result, MYSQLI_ASSOC);
    $cheeses = mysqli_fetch_all($cheeses_result, MYSQLI_ASSOC);
    $dairy_eggs = mysqli_fetch_all($dairy_eggs_result, MYSQLI_ASSOC);

    $data = array('Chickens' => $chicken, 'Beefs' => $beef, 'Seafoods' => $seafood, 'Herbs & Spices' => $herb_spices, 'Pantry Essentials' => $pantry_essentials, 'Vegetables & Greens' => $veg_greens, 'Fruits' => $fruits, 'Cheeses' => $cheeses, 'Dairy & Eggs' => $dairy_eggs);

    return json_encode($data);
}

$server = new soap_server();
$server->configureWSDL('fetchIngredients', 'urn:fetchIngredients');
$server->register(
    'fetchIngredients',
    array(),
    array('ingredients' => 'xsd:string'),
    'urn:fetchIngredients',
    'urn:fetchIngredients#fetchIngredients',
    'rpc',
    'encoded'
);

$server->service(file_get_contents('php://input'));



?>