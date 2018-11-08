<?php

// Check to see if folder already exists

// Create Brand Folder

$brand = $_POST['brand'];

// if files aren't empty, check to see if file is a csv
$reqFileType = array('application/vnd.ms-excel', 'text/plain', 'text/csv', 'text/tsv');


if (file_exists('./brands/' . $brand)) {
    echo "it exists";
}

else {
    echo 'nope';
}

// // continue if the filetype
// if (in_array($_FILES['data-file']['type'], $reqFileType)) {

//     // if archive folder doesn't already exist, create it
//     if (!file_exists('./archive')) {
//         mkdir('./archive', 0777, true);
//     }

//     // if data.csv already exists
//     // move data.csv to archive folder and rename it
//     if(file_exists('data.csv')) {
//         rename ('data.csv', 'archive/data-archive.csv');
//         $t = time();
//         echo date('m/d/Y h:i:s a', time());
//     }

    

//     // place new file in local directory and name it data.csv

//     $targetdir = './';

//     // name of the directory where the files should be stored
//     $targetfile = $targetdir . 'data.csv';

//     if (move_uploaded_file($_FILES['data-file']['tmp_name'], $targetfile)) {
//         echo "
//         <script type=\"text/javascript\">
//             console.log('done');
//         </script>
//         ";
//         // file uploaded succeeded
//     } else {
//         // file upload failed
//         echo $_FILES['file']['error'];
//     }

// } else {
//     die("Sorry, wrong file type");
// }
