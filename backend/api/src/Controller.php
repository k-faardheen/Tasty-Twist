<?php
class Controller
{
    public function __construct(private Gateway $gateway)
    {
    }
    public function processRequest(string $method, string $query): void
    {
        $this->processResourceRequest($method);
        $this->processCollectionRequest($method);
    }

    private function processResourceRequest($method)
    {

        switch ($method) {
            case "DELETE":
                $data = (array) json_decode(file_get_contents('php://input'), true);
                $id = $data['id'];
                $this->gateway->delete($id);
                echo json_encode([
                    "message" => "$id was delete"
                ]);
                break;
            case "PATCH":
                $data = (array) json_decode(file_get_contents('php://input'), true);

                var_dump($data);
                $this->gateway->update($data);
                echo json_encode([
                    "message" => "record was updated"
                ]);
        }
    }


    private function processCollectionRequest(
        string $method,
    ): void {
        switch ($method) {
            case "GET":
                echo json_encode($this->gateway->getAll());
                break;
            case "POST":
                $data = (array) json_decode(file_get_contents('php://input'), true);
                $id = $this->gateway->create($data);

                echo json_encode([
                    "message" => "Product created",
                    "id" => $id
                ]);
                break;
        }
    }
}