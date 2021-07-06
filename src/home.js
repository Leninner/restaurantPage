const contenedor = document.querySelector("#content");

function doHeader(icon) {
    let header = document.createElement("div"),
        topTitle = document.createElement("div"),
        topMenu = document.createElement("div"),
        img = new Image(),
        hTitle = document.createElement("div"),
        hOne = document.createElement("h1"),
        pOne = document.createElement("p"),
        lista = document.createElement("ul"),
        itemOne = document.createElement("li"),
        itemTwo = document.createElement("li"),
        itemThree = document.createElement("li"),
        refItemOne = document.createElement("a"),
        refItemTwo = document.createElement("a"),
        refItemThree = document.createElement("a");

    //Añadir propiedades

    img.src = icon;
    img.alt = "Comidita";
    hOne.textContent = "Cheda";
    pOne.textContent = "Comida Tradicional";
    refItemOne.textContent = "Menú";
    refItemOne.href = "#menu";
    refItemOne.setAttribute("id", "btnMenu");
    refItemTwo.textContent = "Reservaciones";
    refItemTwo.href = "#reservation";
    refItemTwo.setAttribute("id", "btnReservation");
    refItemThree.textContent = "Inicio";
    refItemThree.href = "#";
    refItemThree.setAttribute("id", "btnInicio");

    // Añadir Estilos

    header.classList.add("header");
    topTitle.classList.add("topTitle");
    topMenu.classList.add("topMenu");

    // Añadir hijos
    itemOne.appendChild(refItemOne);
    itemTwo.appendChild(refItemTwo);
    itemThree.appendChild(refItemThree);
    lista.append(itemThree, itemOne, itemTwo);
    hTitle.append(hOne, pOne);
    topTitle.append(img, hTitle);
    topMenu.appendChild(lista);
    header.append(topTitle, topMenu);
    contenedor.appendChild(header);
}

function doFooter() {
    let footer = document.createElement("div"),
        hFooter = document.createElement("h3"),
        pFooter = document.createElement("p");

    hFooter.textContent = "Leninner | Github";
    pFooter.textContent = "DOM y Webpack";

    footer.classList.add("footer");

    footer.append(hFooter, pFooter);
    contenedor.appendChild(footer);
}

function doBody(image) {
    let divBody = document.createElement("div"),
        imgMain = new Image(),
        hImg = document.createElement("h1");

    imgMain.src = image;
    imgMain.alt = "Chinchulines";
    hImg.textContent = "Los Mejores Chinchulines";

    divBody.classList.add("mainBody");

    divBody.append(hImg, imgMain);
    contenedor.appendChild(divBody);
}

export { doHeader, doFooter, doBody };
