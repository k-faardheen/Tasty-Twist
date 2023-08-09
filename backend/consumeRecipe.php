<!-- 
    BAD CODE!!
    
    <?php
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');
    error_reporting(E_ALL);
    ini_set('display_errors', '1');



    require_once realpath(__DIR__ . "/vendor/autoload.php");
    use Dotenv\Dotenv;

    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    $apiKey = getenv("API_KEY");

    echo "API Key: " . $apiKey;

    // $query = '';
// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//     $rawData = file_get_contents("php://input");
//     $requestData = json_decode($rawData, true); // Convert JSON to associative array
    
    //     if (isset($requestData["selectedIngredients"])) {
//         $selectedIngredients = $requestData["selectedIngredients"];
//         $ingredients = join(',', $selectedIngredients);
//         $url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=$apiKey&ingredients=$ingredients&number=$number";
// try {
//     $res = file_get_contents($url);
//     echo $res;
// } catch (Exception $e) {
//     echo $e->getMessage();
// }
//     }
// }
    

    // $response = file_get_contents($url);
    
    // echo $query;
    
    ?> -->