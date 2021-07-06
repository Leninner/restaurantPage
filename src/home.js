const contenedor = document.querySelector("#content");

function doHeader() {
    let div = document.createElement("div"),
        divHijo = document.createElement("div");

    divHijo.textContent = "Leninnn";

    div.classList.add("hello");

    div.appendChild(divHijo);
    contenedor.appendChild(div);
}

export default doHeader;
