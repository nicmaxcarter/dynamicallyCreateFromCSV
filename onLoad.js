document.body.onload = main();

// Driver function
function main() {

  console.log('log begin');

  // Creates preset Image Card
  var col = createElement();

  // Add created card to the body
  addThis(col);

  readFile();

  console.log('log end');
}



// This function takes the element passed to it and adds the element
// to the body BEFORE the end of the "row" div
function addThis(elementToAdd) {
  var placeholder = document.getElementById('main-row');
  placeholder.insertAdjacentElement('beforeend', elementToAdd);
  console.log('element added');
};


function readFile() {
  console.log('start read file');

  // var data = Papa.parse(csv);

  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }

  // var fileName = './mini-temp.csv';

  // var file = fileName.target.files[0];

  // console.log(fileName);
  // console.log(file);

  // var txt = '';
  // var xmlhttp = new XMLHttpRequest();
  // xmlhttp.onreadystatechange = function () {
  //   if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
  //     txt = xmlhttp.responseText;
  //   }
  // };
  // xmlhttp.open("GET", "mini-temp.csv", true);
  // xmlhttp.send();


  // readSingleFile('mini-temp.csv');
  // readTextFile('file:///C:/Users/mcarter/Documents/service-source-exp-local/Testing/test.txt');

  console.log('end read file');
}
















// DIDNT WORK
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(allText);
                alert(allText);
            }
        }
    }
    
    // rawFile.send(null);
}







// DIDNT WORK
function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    // Display file content
    displayContents(contents);
  };
  reader.readAsText(file);
}
 
function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.innerHTML = contents;
}
 








const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};