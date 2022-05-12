<?php
    $file = fopen("come.txt","r");
    $num=0;
    while(!feof($file))
    {
        $num=$num+(int)fgets($file);
    }
    fclose($file);  
    file_put_contents("come.txt" ,$num+1);
?>
<!-- <script type='text/javascript'>document.onload = window.close();</script> -->
<script type='text/javascript'>window.location.href="daohang.html"; </script>