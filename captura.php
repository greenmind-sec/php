Interface <?php echo htmlspecialchars($_POST['interface']); ?>.
Quantidade de pacotes <?php echo (int)$_POST['npacotes']; ?>.
Saida <?php echo ($_POST['saida']); ?>.

<?php
$interface = $_POST['interface'];
$npacotes = (int)$_POST['npacotes'];
$saida = $_POST['saida'];

echo "$interface , $npacotes , $saida";

$output = shell_exec('id');
//$output = shell_exec('sudo ./captura.sh '+$interface+' '+'-c '+$npacotes+' '+$saida);
echo "<pre>$output</pre>";
?>
