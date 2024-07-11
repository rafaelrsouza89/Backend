<?php
   require_once("conexao-bd.php");

   try{
      $stmt = $conn->prepare("SELECT * FROM cliente");
      $stmt->execute();
      $results = $stmt->fetchALL(PDO::FETCH_ASSOC);
      $json = json_encode( $results);
         print($json);
      }
 catch(PDOException $e) {
   echo "Error: " . $e->getMessage();
}
$conn = null;

?>