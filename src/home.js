const contenedor = document.querySelector("#content");

function doHeader(color) {
    let div = document.createElement("div");

    div.style.width = 150 + "px";
    div.style.height = 150 + "px";
    div.style.background = color;

    div.classList.add("hello");

    contenedor.appendChild(div);
}

export default doHeader;
