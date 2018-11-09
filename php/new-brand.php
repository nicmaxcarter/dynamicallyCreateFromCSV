<?php

// Check to see if folder already exists

// Create Brand Folder

$brand = $_POST['brand'];
$newDir = '../brands/' . $brand;

// if files aren't empty, check to see if file is a csv
$reqFileType = array('application/vnd.ms-excel', 'text/plain', 'text/csv', 'text/tsv');

// continue if the filetype
if (in_array($_FILES['data-file']['type'], $reqFileType)) {

    // continue if the brand doesn't already exist
    if (!file_exists($newDir)) {
        mkdir($newDir, 0777, true);

        // copy over necessary files
        copy('../components/update_data.html', $newDir . '/update_data.html');
        copy('../components/service-images.html', $newDir . '/service-images.html');

        // place new file in local directory and name it data.csv
        if (move_uploaded_file($_FILES['data-file']['tmp_name'], $newDir . '/data.csv')) {
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
        echo 'brand already exists';
    }

} else {
    die("Sorry, wrong file type");
}
