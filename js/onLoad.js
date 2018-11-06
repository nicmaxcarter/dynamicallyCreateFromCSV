// document.body.onload = openFile('./data.csv');

var lines;


// Opens the file with an xmlhttp request, sends it to the reqListener
function openFile(name) {

  console.log('log begin');
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", respond);
  oReq.open("GET", name);
  oReq.send();
}

// Responds to the http request
function respond() {
  console.log('file opened');

  // store the text version of the file read
  var string = this.responseText;

  // call the main function, passing it the opened string
  main(string);
}


// Driver function
function main(string) {

  // Open file and sends it to readFile()
  console.log('file sent to readFile()');

  readFile(string);
  console.log('file read');

  // console.log(lines);

  var brand = lines[0][0];
  // var brand = "temp";
  // console.log(lines[1]);

  createMainDriver(brand);
  createElementDriver(lines);


  console.log('log end');
}

// Simple driver function to call necessary function to create main secion of HTML
function createMainDriver(brand) {
  console.log('in createMainDriver()');
  // console.log('lines: ' + lines);
  // console.log('brand: ' + brand);
  var mainSec = createMain(brand);

  addToBody(mainSec);
}

// Simple driver function to call necessary function to create image element secion of HTML
function createElementDriver(array) {
  for (var i = 1; i < array.length; i++) {
    // console.log("TITLE: " + array[i][0]);
    for (var k = 1; k < array[i].length; k = k + 2) {
      var title = array[i][0];
      var med = array[i][k];
      var lrg = array[i][k + 1];

      // Check to see if medium or large are empty
      // If so, replace it with 'no-img' to alert later functions
      if (med == '' || med == null) {
        med = 'no-img';
      }

      if (lrg == '' || lrg == null) {
        lrg = 'no-img';
      }

      // If both med and large are empty, do not continue
      if (!(med == 'no-img' && lrg == 'no-img')) {
        var col = createElement(title, med, lrg);
        addAfterPlaceHolder(col);
      }
    }
  }
}

// Processes the file sent to it
function readFile(string) {
  // var contents = text;
  // console.log(contents);
  var allTextLines = string.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  lines = [];
  // var lines = [];
  lines.push(headers);

  // console.log(headers);

  for (var i = 1; i < allTextLines.length; i++) {
    var data = allTextLines[i].split(',');
    // console.log('data:' + i + '\n' + data);
    var tarr = [];
    for (var j = 0; j < data.length; j++) {
      tarr.push(data[j]);
    }
    lines.push(tarr);
    // console.log( tarr );
  }
}


// Takes the element passed to it and adds the element
// to the body BEFORE the end of the "row" div
function addAfterPlaceHolder(elementToAdd) {
  var placeholder = document.getElementById('main-row');
  placeholder.insertAdjacentElement('beforeend', elementToAdd);
  console.log('element added');
};

// Add provided element to the body
function addToBody(elementToAdd) {
  var placeholder = document.getElementById('main');
  placeholder.insertAdjacentElement('afterbegin', elementToAdd);
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