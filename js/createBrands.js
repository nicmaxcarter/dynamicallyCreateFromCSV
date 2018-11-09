function createBrand(brandString) {
    var brands = JSON.parse(brandString);
    // console.log(brands);
    for (var i = 0; i < brands.length; i++) {
        // console.log(brands[i]);
        var col = createBrandElement(brands[i]);
        addAfterPlaceHolder(col);
    }
}


function createBrandElement(brandTitle) {
    // console.log("TITLE INSIDE: " + titleTxt);


    // <div class="column">
    var column = document.createElement('div');
    column.setAttribute('class', 'column');

    // <div class="content-main">
    var content = document.createElement('div');
    content.setAttribute('class', 'content-main');

    // <h2 class="case">porsche</h2>
    var title = document.createElement('h2');
    title.setAttribute('class', 'case');
    title.innerHTML = brandTitle;

    // <a href="./brands/porsche/service-images.html">
    var link = document.createElement('a');
    link.setAttribute('href', './brands/' + brandTitle + '/service-images.html');

    // <button name="button" class="large">Continue</button>
    var button = document.createElement('button');
    button.setAttribute('name', 'button');
    button.setAttribute('class', 'large');
    button.innerHTML = 'Continue';

    link.appendChild(button);

    content.appendChild(title);
    content.appendChild(link);
    column.appendChild(content);

    return column;
}


// Takes the element passed to it and adds the element
// to the body BEFORE the end of the "row" div
function addAfterPlaceHolder(elementToAdd) {
    var placeholder = document.getElementById('main-row');
    placeholder.insertAdjacentElement('beforeend', elementToAdd);
    console.log('element added');
};
