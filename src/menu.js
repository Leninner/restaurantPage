const contenedor = document.querySelector("#content");

function doMenu(comidaOne, comidaTwo, comidaThree) {
    // Cajas para almacenar los elementos del menú
    let divMenu = document.createElement("div"),
        titleMenu = document.createElement("div"),
        firstFood = document.createElement("div"),
        secondFood = document.createElement("div"),
        thirdFood = document.createElement("div");

    // Títulos para el menú
    let hMenu = document.createElement("h1"),
        hFirstFood = document.createElement("h3"),
        hSecondFood = document.createElement("h3"),
        hThirdFood = document.createElement("h3");

    // Párrafos para el menú
    let pFirstFood = document.createElement("p"),
        pSecondFood = document.createElement("p"),
        pThirdFood = document.createElement("p");

    // Imágenes para el menú
    let iFirstFood = new Image(),
        iSecondFood = new Image(),
        iThirdSecond = new Image();

    // Botones para el menú
    let bFirstFood = document.createElement("input"),
        bSecondFood = document.createElement("input"),
        bThirdFood = document.createElement("input");

    // Títulos
    hMenu.textContent = "Menú | Cheda";
    hFirstFood.textContent = "Chinchulines";
    hSecondFood.textContent = "Caldo de 31";
    hThirdFood.textContent = "Seco de Librillo";

    // Párrafos
    pFirstFood.textContent = "Un platillo hecho con amor y sazón";
    pSecondFood.textContent = "¡Ay!, esto es una delicia";
    pThirdFood.textContent = "¿Vamos a Probarlo?";

    //Imágenes
    iFirstFood.src = comidaOne;
    iFirstFood.alt = "Chinchus";
    iSecondFood.src = comidaTwo;
    iSecondFood.alt = "Caldito";
    iThirdSecond.src = comidaThree;
    iThirdSecond.alt = "Librillo";

    // Botones
    bFirstFood.type = "button";
    bFirstFood.value = "Pedir";
    bSecondFood.type = "button";
    bSecondFood.value = "Pedir";
    bThirdFood.type = "button";
    bThirdFood.value = "Pedir";

    //Diseños
    titleMenu.classList.add("titleMenu");
    firstFood.classList.add("firstFood");
    secondFood.classList.add("secondFood");
    thirdFood.classList.add("thirdFood");

    // Añadir hijos
    titleMenu.appendChild(hMenu);
    firstFood.append(hFirstFood, iFirstFood, pFirstFood, bFirstFood);
    secondFood.append(hSecondFood, iSecondFood, pSecondFood, bSecondFood);
    thirdFood.append(hThirdFood, iThirdSecond, pThirdFood, bThirdFood);
    divMenu.append(titleMenu, firstFood, secondFood, thirdFood);
    contenedor.appendChild(divMenu);
}

export default doMenu;
