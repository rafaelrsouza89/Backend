<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $cliente = new StdClass();
    foreach ($_POST as $key => $value) {
        $cliente->$key = $value;
    }
    print_r($cliente);
    $filename = "txt/clientes.csv";
    $file = fopen($filename, "a");
    if ($file) {
        $line = "$cliente->codigo;$cliente->nome;$cliente->email\n";
        fwrite($file, $line);
        fclose($file);
    }
}

?>