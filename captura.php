<?php

$npacotes = $_POST['npacotes'];
$output = shell_exec('echo "Fuu"'+$npacotes);
echo "<pre>$output</pre>";
?>
