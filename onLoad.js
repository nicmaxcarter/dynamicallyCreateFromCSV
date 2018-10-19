document.body.onload = addElementToPage();

function addElementToPage() {

  console.log('log begin');

  // Creates preset Image Card
  var col = createElement();
  
  // Add created card to the body
  addThis(col);
   
  console.log('log end');
}

// This function takes the element passed to it and adds the element
// to the body BEFORE the end of the "row" div
function addThis(elementToAdd) {
  var placeholder = document.getElementById('main-row');
  placeholder.insertAdjacentElement('beforeend', elementToAdd);
  console.log('element added');
};


