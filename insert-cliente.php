<?php
require_once( "conexao-bd.php" );
print_r( $_REQUEST );
$request = ( object ) $_REQUEST;

try {
    $stmt = $conn->prepare( "INSERT INTO cliente(nome, email) VALUES(?,?)" );
    $stmt->execute([$request->nome,$request->email]);
} catch( PDOexception $e ) {
    echo "Error: " .$e->getMessage();
}
$conn = null;
?>