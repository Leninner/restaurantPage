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
    refItemTwo.textContent = "Reservaciones";
    refItemTwo.href = "#reservation";
    refItemThree.textContent = "Contacto";
    refItemThree.href = "#contact";

    // Añadir Estilos

    header.classList.add("header");
    topTitle.classList.add("topTitle");
    topMenu.classList.add("topMenu");

    // Añadir hijos
    itemOne.appendChild(refItemOne);
    itemTwo.appendChild(refItemTwo);
    itemThree.appendChild(refItemThree);
    lista.append(itemOne, itemTwo, itemThree);
    hTitle.append(hOne, pOne);
    topTitle.append(img, hTitle);
    topMenu.appendChild(lista);
    header.append(topTitle, topMenu);
    contenedor.appendChild(header);
}

export default doHeader;
