<?php
$cliente = json_decode(file_get_contents("php://input"));
$filename = "txt/clientes.csv";
$file = fopen($filename, "a");
if ($file) {
    $line = "$cliente->codigo;$cliente->nome;$cliente->email\n";
    fwrite($file, $line);
    fclose($file);
}
?>