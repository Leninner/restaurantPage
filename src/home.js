const contenedor = document.querySelector("#content");

function doHeader(color) {
    let div = document.createElement("div"),
        divHijo = document.createElement("div");

    div.style.width = 150 + "px";
    div.style.height = 150 + "px";
    div.style.background = color;
    divHijo.textContent = "Leninnn";

    div.classList.add("hello");

    div.appendChild(divHijo);
    contenedor.appendChild(div);
}

export default doHeader;
