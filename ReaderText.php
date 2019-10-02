 <?php

$file_handle = fopen("output/saida.txt", "r");
while (!feof($file_handle)) {
   $line = fgets($file_handle);
   echo "<p>". $line . "</p></br>||";
}
fclose($file_handle);

?>
<!-- Windump -i 2 -c 10 -n > C:/xampp/htdocs/WinDump/Arquivo.txt -->
<!-- tcpdump -i wlp3s0 -c 10 -n teste.txt -->
<!-- tcpdump -nAs0 -i eth0 'port 80' >> pegandoasenha-tcpdump.txt -->
