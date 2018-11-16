
function initFileOnlyAjaxUpload() {
    var uploadBtn = document.getElementById('upload-button-id');
    uploadBtn.onclick = function (evt) {
        var formData = new FormData();


        // Since this is the file only, we send it to a specific location
        var action = '../../php/update-brand.php';

        // FormData only has the file
        var fileInput = document.getElementById('file-id');
        var file = fileInput.files[0];
        var brandName = getBrand();
        // console.log(file);
        formData.append('data-file', file);
        formData.append('brand-name', brandName);
        // console.log(...formData);
        // Code common to both variants
        sendXHRequest(formData, action);
    }

}

// Once the FormData instance is ready and we know
// where to send the data, the code is the same
// for both variants of this technique
function sendXHRequest(formData, uri) {
    // Get an XMLHttpRequest instance
    var xhr = new XMLHttpRequest();
    console.log(...formData);

    // Set up events
    xhr.upload.addEventListener('loadstart', onloadstartHandler, false);
    xhr.upload.addEventListener('progress', onprogressHandler, false);
    xhr.upload.addEventListener('load', onloadHandler, false);
    xhr.addEventListener('readystatechange', onreadystatechangeHandler, false);

    // Set up request
    xhr.open('POST', uri, true);

    // Fire!
    xhr.send(formData);
}

// Handle the start of the transmission
function onloadstartHandler(evt) {
    var div = document.getElementById('upload-status');
    div.innerHTML = 'Upload started.';
}

// Handle the end of the transmission
function onloadHandler(evt) {
    var div = document.getElementById('upload-status');
    div.innerHTML += '<' + 'br>File uploaded. Waiting for response.';
}

// Handle the progress
function onprogressHandler(evt) {
    var div = document.getElementById('progress');
    var percent = evt.loaded / evt.total * 100;
    div.innerHTML = 'Progress: ' + percent + '%';
}

// Handle the response from the server
function onreadystatechangeHandler(evt) {
    var status, text, readyState;

    try {
        readyState = evt.target.readyState;
        text = evt.target.responseText;
        status = evt.target.status;
    }
    catch (e) {
        return;
    }

    // ONLY TOGGLE THIS FOR TESTING
    if (readyState == 4 && status == '200' && evt.target.responseText) {
        var status = document.getElementById('upload-status');
        status.innerHTML += '<' + 'br>Success!';

        var result = document.getElementById('result');
        result.innerHTML = '<p>The server saw it as:</p><pre>' + evt.target.responseText + '</pre>';
    }

    document.getElementById('upload-button-id').style.display = 'none';
    document.getElementById('return-home-btn').style.display = 'block';


}




// Return Brand name, which is the same as the
// name of the current directory
function getBrand() {
    var loc = window.location.pathname;
    paths = loc.split('/');
    paths.pop();
    return paths.pop();
}