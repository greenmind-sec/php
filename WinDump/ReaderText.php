 <?php

$file_handle = fopen("Arquivo.txt", "r");
while (!feof($file_handle)) {
   $line = fgets($file_handle);
   echo $line;
}
fclose($file_handle);

?>

<!-- Windump -i 2 -e > C:/xampp/htdocs/WinDump/Arquivo.txt -->