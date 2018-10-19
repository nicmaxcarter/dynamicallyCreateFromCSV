function createElement() {

    // <div class="column">
    var column = document.createElement('div');
    column.setAttribute('class', 'column');

    // <div class="content">
    var content = document.createElement('div');
    content.setAttribute('class', 'content');

    // <img class="full-width-img" src="https://via.placeholder.com/350x230">
    var fullWidthImg = document.createElement('IMG');
    fullWidthImg.setAttribute('class', 'full-width-img');
    fullWidthImg.src = "https://via.placeholder.com/350x230";

    // <h3>Accessories</h3>
    var title = document.createElement('h3');
    title.innerHTML = "Title";

    var medLink = "copyToClipboard('LINK_TO_MEDIUM_IMAGE_GOES_HERE')";

    var medButton = document.createElement('button');
    medButton.setAttribute('name', 'button');
    medButton.setAttribute('class', 'medium');
    medButton.setAttribute('onclick', medLink);
    medButton.innerHTML = "Medium";

    var lrgLink = "copyToClipboard('LINK_TO_LARGE_IMAGE_GOES_HERE')";

    var lrgButton = document.createElement('button');
    lrgButton.setAttribute('name', 'button');
    lrgButton.setAttribute('class', 'large');
    lrgButton.setAttribute('onclick', lrgLink);
    lrgButton.innerHTML = "Large";

    // attach created elements
    content.appendChild(fullWidthImg);
    content.appendChild(title);
    content.appendChild(medButton);
    content.appendChild(lrgButton);
    column.appendChild(content);

    return column;

}