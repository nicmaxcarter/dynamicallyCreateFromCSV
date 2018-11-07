<?php

// Check to see if folder already exists

$brand = $_POST['brand-name'];

// if files aren't empty, check to see if file is a csv
$reqFileType = array('application/vnd.ms-excel', 'text/plain', 'text/csv', 'text/tsv');

// continue if the filetype
if (in_array($_FILES['data-file']['type'], $reqFileType)) {

    // if archive folder doesn't already exist, create it
    if (!file_exists('../brands/' . $brand . '/archive')) {
        mkdir('../brands/' . $brand . '/archive', 0777, true);
    }

    // if data.csv already exists
    // move data.csv to archive folder and rename it
    $currentFile = '../brands/' . $brand . '/data.csv';
    $archiveFile = '../brands/' . $brand . '/archive/data.csv';
    if(file_exists($currentFile)) {
        rename ($currentFile, $archiveFile);
        $t = time();
        echo date('m/d/Y h:i:s a', time());
    }

    

    // place new file in local directory and name it data.csv

    // $targetdir = '../brands/' . $_POST['brand-name'];

    // name of the directory where the files should be stored
    // $targetfile = $targetdir . 'data.csv';

    if (move_uploaded_file($_FILES['data-file']['tmp_name'], $currentFile)) {
        echo "
        <script type=\"text/javascript\">
            console.log('done');
        </script>
        ";
        // file uploaded succeeded
    } else {
        // file upload failed
        echo $_FILES['file']['error'];
    }

} else {
    die("Sorry, wrong file type");
}
