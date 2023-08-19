<?php
class Gateway
{
    private PDO $conn;
    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection();
    }

    public function getAll(): array
    {
        $sql = "SELECT * FROM saved_recipes";
        $stmt = $this->conn->query($sql);

        $data = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }

        return $data;
    }

    public function create(array $data): string
    {
        $sql = "INSERT INTO saved_recipes (id, title, image, ingredients, status)
                VALUES (:id, :title, :image, :ingredients, :status)";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":id", $data['id'], PDO::PARAM_INT);
        $stmt->bindValue(":title", $data['title'], PDO::PARAM_STR);
        $stmt->bindValue(":image", $data['image'], PDO::PARAM_STR);
        $stmt->bindValue(":ingredients", implode(",", $data['formattedIngredients']), PDO::PARAM_STR);
        $stmt->bindValue(":status", "to-try", PDO::PARAM_STR);

        $stmt->execute();
        return $this->conn->lastInsertId();
    }

    public function delete(string $id): int
    {
        $sql = "DELETE FROM saved_recipes
                WHERE id = :id";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->rowCount();
    }

    public function update(array $new): int
    {
        $sql = "UPDATE saved_recipes
                SET status = :status
                WHERE id = :id";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":status", $new['status'], PDO::PARAM_STR);
        $stmt->bindValue(":id", $new['recipe']['id'], PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->rowCount();
    }
}