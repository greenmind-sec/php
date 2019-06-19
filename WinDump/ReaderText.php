 <?php

$file_handle = fopen("Arquivo.txt", "r");
while (!feof($file_handle)) {
   $line = fgets($file_handle);
   echo "<p>". $line . "</p></br>||";
}
fclose($file_handle);

?>
<!-- Windump -i 2 -c 10 -n > C:/xampp/htdocs/WinDump/Arquivo.txt -->