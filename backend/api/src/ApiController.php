<?php
class ApiController
{
    public function processRequest(string $method): void
    {
        $this->processCollectionRequest($method);
    }

    public function processCollectionRequest(string $method): void
    {
        switch ($method) {
            case "GET":
                echo json_encode(["name" => "Faardheen"]);
                break;
            case "POST":
                // $data = file_get_contents("php://input");
                // $ingredients = json_decode($data, true); // Convert JSON to associative array
                // echo $ingredients;

                $data = (array) json_decode(file_get_contents("php://input"), true);
                $selectedIngredients = $data["selectedIngredients"];
                $ingredients = join(',', $selectedIngredients);
                $ingredients = str_replace(' ', '+', $ingredients);

                echo json_encode($ingredients, true);


        }
    }
}
?>