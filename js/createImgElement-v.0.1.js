function createMain(brand) {
    var main = document.createElement('div');

    var brandName = document.createElement('h1');
    brandName.setAttribute('class', 'header case');
    brandName.innerHTML = brand;

    var subHeader = document.createElement('h2');
    subHeader.setAttribute('class', 'subHeader case');
    subHeader.innerHTML = "service images";

    var backLink = document.createElement('a');
    backLink.setAttribute('href', '../../index.html');

    var backButton = document.createElement('button');
    backButton.setAttribute('class', 'back');
    backButton.innerHTML = "Back";

    backLink.appendChild(backButton);

    var mainRow = document.createElement('div');
    mainRow.setAttribute('id', 'main-row');
    mainRow.setAttribute('class', 'row');

    var spacerRow = document.createElement('div');
    spacerRow.setAttribute('class', 'row');

    var subSpacer = document.createElement('div');
    subSpacer.setAttribute('style', 'height: 20px;');

    var breakParagraph = document.createElement('p');
    breakParagraph.innerHTML = "&nbsp;";

    var breakParagraph2 = document.createElement('p');
    breakParagraph2.innerHTML = "&nbsp;";

    spacerRow.appendChild(subSpacer);
    subSpacer.appendChild(breakParagraph);
    subSpacer.appendChild(document.createElement('hr'));
    subSpacer.appendChild(breakParagraph2);



    main.appendChild(brandName);
    main.appendChild(subHeader);
    main.appendChild(document.createElement('hr'));
    main.appendChild(document.createElement('br'));
    main.appendChild(backLink);
    main.appendChild(mainRow);
    main.appendChild(spacerRow);



    return main;
}

function createElement(titleTxt, med, lrg) {
    // console.log("TITLE INSIDE: " + titleTxt);
    // console.log("\tMED INSIDE: " + med);
    // console.log("\tLRG INSIDE: " + lrg);

    // <div class="column">
    var column = document.createElement('div');
    column.setAttribute('class', 'column');

    // <div class="content">
    var content = document.createElement('div');
    content.setAttribute('class', 'content');

    // <img class="full-width-img" src="https://via.placeholder.com/350x230">
    var fullWidthImg = document.createElement('IMG');
    fullWidthImg.setAttribute('class', 'full-width-img');
    fullWidthImg.src = med;
    // fullWidthImg.src = "https://via.placeholder.com/350x230";

    // <h3>Accessories</h3>
    var title = document.createElement('h3');
    // title.innerHTML = "Title";
    title.innerHTML = titleTxt;


    var medButton = document.createElement('button');
    medButton.setAttribute('name', 'button');
    medButton.setAttribute('class', 'medium');
    medButton.setAttribute('onclick', "copyToClipboard('" + med + "')");
    medButton.innerHTML = "Medium";


    var lrgButton = document.createElement('button');
    lrgButton.setAttribute('name', 'button');
    lrgButton.setAttribute('class', 'large');
    lrgButton.setAttribute('onclick', "copyToClipboard('" + lrg + "')");
    lrgButton.innerHTML = "Large";

    // attach created elements
    content.appendChild(fullWidthImg);
    content.appendChild(title);

    if (med != 'no-img') {
        content.appendChild(medButton);
    }

    if (lrg != 'no-img') {
        content.appendChild(lrgButton);
    }

    column.appendChild(content);

    return column;

}