<?php

// echo 'wtf';

$directories = array();
//path to directory to scan
$directory = "../brands/";
 
//get all files in specified directory
$files = glob($directory . "*");
 

$count = 0;
//print each file name
foreach($files as $file)
{
 //check to see if the file is a folder/directory
 if(is_dir($file))
 {
    $directories[$count++] = basename($file);
 }
}


// print_r($directories);

echo json_encode($directories);

?>