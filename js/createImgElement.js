function createMain(brand) {

    var main = document.createElement('div');

    // <div class="flex-row">
    var flexRow = document.createElement('div');
    flexRow.setAttribute('class', 'flex-row');

    // <div class="flex-column left">
    var left = document.createElement('div');
    left.setAttribute('class', 'flex-column left');

    var subLeft = document.createElement('div');

    var brandName = document.createElement('h1');
    brandName.setAttribute('class', 'header case');
    brandName.innerHTML = brand;

    var subHeader = document.createElement('h2');
    subHeader.setAttribute('class', 'subHeader case');
    subHeader.innerHTML = "service images";

    var right = document.createElement('div');
    right.setAttribute('class', 'flex-column right');

    var subRight = document.createElement('div');
    subRight.setAttribute('class', 'sub-flex');

    var updateLink = document.createElement('a');
    updateLink.setAttribute('href', './update_data.html')

    var updateBtn = document.createElement('button');
    updateBtn.setAttribute('name', 'update-data');
    updateBtn.setAttribute('class', 'medium');
    updateBtn.innerHTML = "+ Update Data File";

    var backLink = document.createElement('a');
    backLink.setAttribute('href', '../../index.html');

    var backButton = document.createElement('button');
    backButton.setAttribute('class', 'back');
    backButton.innerHTML = "Back";

    

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



    subLeft.appendChild(brandName);
    subLeft.appendChild(subHeader);
    left.appendChild(subLeft);
    flexRow.appendChild(left);

    backLink.appendChild(backButton);
    subRight.appendChild(backLink);
    updateLink.appendChild(updateBtn);
    subRight.appendChild(updateLink);
    
    right.appendChild(subRight);
    flexRow.appendChild(right);
    

    
    main.appendChild(flexRow);
    main.appendChild(document.createElement('hr'));
    main.appendChild(document.createElement('br'));
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